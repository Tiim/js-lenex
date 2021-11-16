var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { readFile } from 'fs/promises';
import { parse } from "fast-xml-parser";
import JSZip from 'jszip';
import he from "he";
var isBrowser = typeof window !== 'undefined';
/**
 *
 * @param {Blob|String|Buffer|Uint8Array} file
 * @returns {Promise<LenexRaw>}
 */
export function parseLenex(file) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleFile(file)];
                case 1:
                    data = _a.sent();
                    if (!isZip(data)) return [3 /*break*/, 3];
                    return [4 /*yield*/, extractZip(data)];
                case 2:
                    data = _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, parseXML(new TextDecoder().decode(data))];
            }
        });
    });
}
/**
 *
 * @param {Blob|String|Buffer|Uint8Array} file
 * @returns {Promise<Uint8Array>}
 */
function handleFile(file) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(!isBrowser && typeof file === "string")) return [3 /*break*/, 1];
                    return [2 /*return*/, readFile(file)];
                case 1:
                    if (!((Buffer && Buffer.isBuffer(file)) || file instanceof Uint8Array)) return [3 /*break*/, 2];
                    return [2 /*return*/, file];
                case 2:
                    if (!(Blob && file instanceof Blob)) return [3 /*break*/, 4];
                    _a = Uint8Array.bind;
                    return [4 /*yield*/, file.arrayBuffer()];
                case 3: return [2 /*return*/, new (_a.apply(Uint8Array, [void 0, _b.sent()]))()];
                case 4: return [2 /*return*/];
            }
        });
    });
}
/**
 *
 * @param {Uint8Array} data
 * @returns {Promise<Uint8Array>}
 */
function extractZip(data) {
    return __awaiter(this, void 0, void 0, function () {
        var zip, keys;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, JSZip.loadAsync(data)];
                case 1:
                    zip = _a.sent();
                    keys = Object.keys(zip.files);
                    if (keys.length > 1) {
                        throw new Error("Not Implemented: lenex file with multiple lenex files");
                    }
                    return [2 /*return*/, zip.files[keys[0]].async("uint8array")];
            }
        });
    });
}
function isZip(buffer) {
    var zip = new Uint8Array([0x50, 0x4b, 0x03, 0x04]);
    for (var i = 0; i < 4; i++) {
        if (zip[i] !== buffer[i]) {
            return false;
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
    var data = parse(str, {
        ignoreAttributes: false,
        attributeNamePrefix: '',
        arrayMode: function (tagName, parentTagName) {
            return tagName.toLowerCase() + "s" === (parentTagName === null || parentTagName === void 0 ? void 0 : parentTagName.toLowerCase());
        },
        tagValueProcessor: function (a) { return he.decode(a, {}); },
        attrValueProcessor: function (a) { return he.decode(a, { isAttributeValue: true }); }
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
        return obj.map(function (x) { return keysToLowerCase(x); });
    }
    if (typeof obj !== "object") {
        return obj;
    }
    var keys = Object.keys(obj);
    var newObj = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var lowKey = key.toLowerCase();
        if (key === lowKey) {
            newObj[key] = obj[key];
        }
        else {
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
        return obj.map(function (o) { return arrayTagSquash(o); });
    }
    else if (typeof obj === 'object') {
        var newObj = {};
        var entries = Object.entries(obj);
        for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
            var _a = entries_1[_i], key = _a[0], val = _a[1];
            if (typeof val === 'object' || !key.endsWith('s')) {
                var subKey = Object.keys(val);
                if (subKey.length === 1 && subKey[0] + 's' === key && Array.isArray(val[subKey[0]])) {
                    newObj[key] = arrayTagSquash(val[subKey[0]]);
                }
                else {
                    newObj[key] = arrayTagSquash(val);
                }
            }
            else {
                newObj[key] = arrayTagSquash(val);
            }
        }
        return newObj;
    }
    else {
        return obj;
    }
}
