var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
import { parseLenex } from './lenex-parse.js';
var Lenex = /** @class */ (function () {
    function Lenex(file) {
        this.file = file;
        this.raw = null;
        this.athleteMap = {};
        this.eventsMap = {};
        this.clubsMap = {};
        this.clubsMapCode = {};
    }
    Lenex.prototype.init = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return __awaiter(this, void 0, void 0, function () {
            var _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        _j = this;
                        return [4 /*yield*/, parseLenex(this.file)];
                    case 1:
                        _j.raw = _k.sent();
                        delete this.file;
                        //console.log(JSON.stringify(this.raw, null, 2));
                        this.eventsMap = (_b = (_a = this.raw.meets) === null || _a === void 0 ? void 0 : _a.flatMap(function (meet) { return meet.sessions; }).flatMap(function (session) { return session.events; }).reduce(function (prev, cur) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a[cur.eventid] = cur, _a)));
                        }, {})) !== null && _b !== void 0 ? _b : {};
                        this.athleteMap = (_d = (_c = this.raw.meets) === null || _c === void 0 ? void 0 : _c.flatMap(function (meet) { return meet.clubs; }).filter(notNull).flatMap(function (club) {
                            var _a, _b;
                            return (_b = (_a = club.athletes) === null || _a === void 0 ? void 0 : _a.map(function (athlete) {
                                return (__assign(__assign({}, athlete), { club: club }));
                            })) !== null && _b !== void 0 ? _b : [];
                        }).reduce(function (prev, cur) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a[cur.athleteid] = cur, _a)));
                        }, {})) !== null && _d !== void 0 ? _d : {};
                        this.clubsMap = (_f = (_e = this.raw.meets) === null || _e === void 0 ? void 0 : _e.flatMap(function (meet) { return meet.clubs; }).filter(notNull).reduce(function (prev, cur) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a[cur.clubid] = cur, _a)));
                        }, {})) !== null && _f !== void 0 ? _f : {};
                        this.clubsMapCode = (_h = (_g = this.raw.meets) === null || _g === void 0 ? void 0 : _g.flatMap(function (meet) { return meet.clubs; }).filter(notNull).reduce(function (prev, cur) {
                            var _a;
                            return (__assign(__assign({}, prev), (_a = {}, _a[cur.code] = cur, _a)));
                        }, {})) !== null && _h !== void 0 ? _h : {};
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Lenex.prototype, "rawLenexData", {
        get: function () {
            return JSON.parse(JSON.stringify(this.raw));
        },
        enumerable: false,
        configurable: true
    });
    Lenex.prototype.getEventById = function (id) {
        return this.eventsMap[id];
    };
    Lenex.prototype.getAthleteById = function (id) {
        return this.athleteMap[id];
    };
    Lenex.prototype.getClubById = function (id) {
        return this.clubsMap[id];
    };
    Lenex.prototype.getClubByClubCode = function (clubCode) {
        return this.clubsMapCode[clubCode];
    };
    Object.defineProperty(Lenex.prototype, "constructorInfo", {
        get: function () {
            return this.raw.constructor;
        },
        enumerable: false,
        configurable: true
    });
    return Lenex;
}());
export { Lenex };
function notNull(a) {
    return a != null;
}
