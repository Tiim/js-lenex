# js-lenex

> LENEX 3.0 library for node.js and the browser.

This library helps reading LENEX 3.0 files. It currently provides a thin wrapper over the LENEX file format.
Generating lenex files is currently not supported, contributions are welcome.

Due to the library currently only being a thin wrapper, basic knowledge of the [LENEX format](https://wiki.swimrankings.net/index.php/swimrankings:Lenex) is required.

## Usage

Install this package with the command

```sh
npm i js-lenex
```

Usage

```js
import { Lenex } from "js-lenex";
// example for nodejs
import { readFile } from "fs/promises";

// read my lenex file
const f = await readFile("./examples/example-entries.lxf");
// Parse the lenex file
// .lef and .lxf files are supported
// this function accepts many types, including blobs from the html file input.
const len = await Lenex.LoadLenexFile(f);

// Print the "raw" lenex structure as a json string
console.log(JSON.stringify(len.rawLenexData, null, 2))
```

## Typescript

The code is written in typescript and has full type support. Types for the whole LENEX specification are available.

## Demo

This site uses `js-lenex` to extract swimmer entries and create a form for coaches to note swim splits during a meet.
https://tiim.ch/lenex-splits-sheet-creator/
