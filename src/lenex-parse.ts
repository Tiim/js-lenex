import { parse } from "fast-xml-parser";
import JSZip from "jszip";
import he from "he";
import { LenexRaw } from "./lenex-type.js";
import { exit } from "process";
//import Ajv from "ajv";
//import addFormats from "ajv-formats"
//import schema from "./schema.json";

/*const ajv = new Ajv({
  allowUnionTypes: true,
})
addFormats(ajv);
const validate = ajv.compile(schema);
*/

export async function parseLenex(
  file: Blob | Buffer | Uint8Array
): Promise<LenexRaw> {
  let data = await handleFile(file);
  if (isZip(data)) {
    data = await extractZip(data);
  }

  const lenex: LenexRaw = parseXML(new TextDecoder().decode(data));

  /*const valid = validate(lenex);

  if (!valid) {
    console.log(ajv.errorsText(validate.errors));
    console.log(JSON.stringify(lenex));
    throw new Error(ajv.errorsText(validate.errors));
  }*/

  return lenex;
}

async function handleFile(
  file: Blob | Buffer | Uint8Array
): Promise<Uint8Array> {
  if ((Buffer && Buffer.isBuffer(file)) || file instanceof Uint8Array) {
    return file;
  } else if (Blob && file instanceof Blob) {
    return new Uint8Array(await file.arrayBuffer());
  }
}

async function extractZip(data: Uint8Array): Promise<Uint8Array> {
  const zip = await JSZip.loadAsync(data);
  const keys = Object.keys(zip.files);
  if (keys.length > 1) {
    throw new Error("Not Implemented: lenex file with multiple lenex files");
  }
  return zip.files[keys[0]].async("uint8array");
}

function isZip(buffer: Uint8Array): boolean {
  const zip = new Uint8Array([0x50, 0x4b, 0x03, 0x04]);
  for (let i = 0; i < 4; i++) {
    if (zip[i] !== buffer[i]) {
      return false;
    }
  }
  return true;
}

const attrIgnoreNumbers = ["zip", "fax", "phone", "mobile"];
function parseXML(str: string): any {
  let data = parse(str, {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    arrayMode: (tagName, parentTagName) => {
      return tagName.toLowerCase() + "s" === parentTagName?.toLowerCase();
    },
    tagValueProcessor: (a, tagName) => {
      let num: any;
      if (a === "") {
        return "";
      } else if (!Number.isNaN((num = Number(a)))) {
        return num;
      } else {
        return he.decode(a, {});
      }
    },
    attrValueProcessor: (a, attrName) => {
      let num: any;
      if (a === "") {
        return "";
      } else if (
        !Number.isNaN((num = Number(a))) &&
        !attrIgnoreNumbers.includes(attrName)
      ) {
        return num;
      } else {
        return he.decode(a, { isAttributeValue: true });
      }
    },
  });

  data = keysToLowerCase(data);
  data = arrayTagSquash(data);
  return data.lenex;
}

function keysToLowerCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((x) => keysToLowerCase(x));
  }
  if (typeof obj !== "object") {
    return obj;
  }
  const keys = Object.keys(obj);
  const newObj = {};
  for (const key of keys) {
    const lowKey = key.toLowerCase();
    if (key === lowKey) {
      newObj[key] = obj[key];
    } else {
      newObj[lowKey] = keysToLowerCase(obj[key]);
    }
  }
  return newObj;
}

// TODO: fix this method to include array entries-entry
const collectionTags = {
  agegroups: "agegroup",
  athletes: "athlete",
  clubs: "club",
  entries: "entry",
  events: "event",
  fees: "fee",
  heats: "heat",
  judges: "judge",
  meets: "meet",
  officials: "official",
  rankings: "ranking",
  recordlists: "recordlist",
  records: "record",
  relays: "relay",
  relaypositions: "relayposition",
  results: "result",
  sessions: "session",
  splits: "split",
  timestandards: "timestandard",
  timestandardlistss: "timestandardlist",
  timestandardrefs: "timestandardref",
};

function arrayTagSquash(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((o) => arrayTagSquash(o));
  } else if (typeof obj === "object") {
    const newObj = {};
    
    const entries = Object.entries(obj);
    for (let [key, val] of entries) {
      if (key in collectionTags) {
        console.log(key,val);
        newObj[key] = arrayTagSquash(val[collectionTags[key]]);
      } else {
        newObj[key] = arrayTagSquash(val);
      }
    }
    return newObj;
  
  } else {
    return obj;
  }
}
