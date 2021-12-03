import { Course } from "./lenex-type";

export const courses: Record<Course, {distance: number, unit: "m"|"y", unitLong: "meter"|"yard"}> = {
  "LCM": {distance: 50, unit: "m", unitLong: "meter"},
  "SCM": {distance: 25, unit: "m", unitLong: "meter"},
  "OPEN": {distance: NaN, unit: "m", unitLong: "meter"},
  "SCM16": {distance: 16, unit: "m", unitLong: "meter"},
  "SCM20": {distance: 20, unit: "m", unitLong: "meter"},
  "SCM33": {distance: 33, unit: "m", unitLong: "meter"},
  "SCY": {distance: 25, unit: "y", unitLong: "yard"},
  "SCY20": {distance: 20, unit: "y", unitLong: "yard"},
  "SCY27": {distance: 27, unit: "y", unitLong: "yard"},
  "SCY33": {distance: 33, unit: "y", unitLong: "yard"},
  "SCY36": {distance: 36, unit: "y", unitLong: "yard"},
}