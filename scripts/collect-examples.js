import {Lenex} from '../src/lenex.js'
import { readdir } from 'fs';

const testFolder = './examples/';

readdir(testFolder, async (err, files) => {
  const all = files.map(async file => {
    const lenex = new Lenex(testFolder+file);
    await lenex.init()
    return lenex.rawLenexData
  });

  const arr = await Promise.all(all);
  console.log(JSON.stringify(arr, null, 2));
});