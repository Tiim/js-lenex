import {Lenex} from '../src/lenex.js'
import { readdir } from 'fs';

const testFolder = './examples/';

readdir(testFolder, async (err, files) => {
  const all = files.map(async file => {
    const lenex = new Lenex(testFolder+file);
    await lenex.init()
    return lenex.rawLenexData
  });


   (await Promise.all(all))
    .map((v, i) => ({file: files[i], data: v}) )
    .filter(({file, data}) => filterFn(data, file))
    .forEach(v => {
      //console.error(" - " + v.file + " / " + JSON.stringify({prog: v.data.constructor.name, ver: v.data.constructor.version}))
      //console.log(JSON.stringify(v.data, null, 2))
    })
});


function filterFn(data, file) {
  return JSON.stringify(data).includes("coach");
}