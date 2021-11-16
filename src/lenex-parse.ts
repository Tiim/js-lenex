import { readFile } from 'fs/promises'
import { parse } from "fast-xml-parser";
import JSZip from 'jszip';
import he from "he"
import { LenexRaw } from './lenex-type.js';

const isBrowser = typeof window !== 'undefined';

/**
 * 
 * @param {Blob|String|Buffer|Uint8Array} file 
 * @returns {Promise<LenexRaw>}
 */
export async function parseLenex(file) : Promise<LenexRaw>{
  let data = await handleFile(file);
  if (isZip(data)) {
    data = await extractZip(data);
  }

  return parseXML(new TextDecoder().decode(data));
}

/**
 * 
 * @param {Blob|String|Buffer|Uint8Array} file 
 * @returns {Promise<Uint8Array>}
 */
async function handleFile(file) {
  if (!isBrowser && typeof file === "string") {
    return readFile(file);
  } else if ((Buffer && Buffer.isBuffer(file)) || file instanceof Uint8Array) {
    return file
  } else if (Blob && file instanceof Blob) {
    return new Uint8Array(await file.arrayBuffer());
  }
}

/**
 * 
 * @param {Uint8Array} data
 * @returns {Promise<Uint8Array>} 
 */
async function extractZip(data) {
  const zip = await JSZip.loadAsync(data);
  const keys = Object.keys(zip.files)
  if (keys.length > 1) {
    throw new Error("Not Implemented: lenex file with multiple lenex files");
  }
  return zip.files[keys[0]].async("uint8array")
}

function isZip(buffer: Uint8Array): boolean {
  const zip = new Uint8Array([0x50, 0x4b, 0x03, 0x04])
  for (let i = 0; i < 4; i++) {
    if (zip[i] !== buffer[i]) {
      return false
    }
  }
  return true;

}

/**
 * 
 * @param {String} str 
 * @returns {any}
 */
function parseXML(str) {
    let data = parse(str, {
    ignoreAttributes : false,
    attributeNamePrefix: '',
    arrayMode: (tagName, parentTagName) => {
      return tagName.toLowerCase() + "s" === parentTagName?.toLowerCase()
    },
    tagValueProcessor: a => he.decode(a, {}),// default is a=>a
    attrValueProcessor: a => he.decode(a, {isAttributeValue: true})
  });

  data = keysToLowerCase(data);
  data = arrayTagSquash(data);
  return data.lenex;
}

/**
 * 
 * @param {any} obj 
 * @returns {any}
 */
function keysToLowerCase(obj) {
    if (Array.isArray(obj)) {
      return obj.map(x => keysToLowerCase(x));
    }
    if (typeof obj !== "object") {
        return obj;
    }
    const keys = Object.keys(obj);
    const newObj = {}
    for (const key of keys) {
        const lowKey = key.toLowerCase()
        if (key === lowKey) {
          newObj[key] = obj[key];
        } else {
          newObj[lowKey] = keysToLowerCase(obj[key]);
        }
    }
    return newObj;
}

/**
 * 
 * @param {any} obj 
 * @returns {any}
 */
function arrayTagSquash(obj) {
  if (Array.isArray(obj)) {
    return obj.map(o => arrayTagSquash(o));
  } else if (typeof obj === 'object') {
    const newObj = {};
    const entries = Object.entries(obj);
    for (let [key, val] of entries) {
      if (typeof val === 'object' || !key.endsWith('s')) {
        const subKey = Object.keys(val);
        if (subKey.length === 1 && subKey[0] + 's' === key && Array.isArray(val[subKey[0]])) {
          newObj[key] = arrayTagSquash(val[subKey[0]]);            
        } else {
          newObj[key] = arrayTagSquash(val);
        }
      } else {
        newObj[key] = arrayTagSquash(val);
      }
    }
    return newObj;
  } else {
    return obj;
  }
}