import {Lenex} from './lenex.js'


const lenex = new Lenex("examples/delemont-ausschreibung.lxf");
await lenex.init()

console.log(JSON.stringify(lenex.rawLenexData))