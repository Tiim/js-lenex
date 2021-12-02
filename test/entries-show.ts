import { readFile } from "fs/promises";
import { Lenex } from "../src/index.js";


async function run() {
  const code = "STKP"

  const f = await readFile("./examples/STKP_BirsPlausch_Meldungen.lxf");

  const len = new Lenex(f);

  await len.init()

  const club = len.rawLenexData.meets?.map(m => {
    const club = m.clubs?.find(c => c.code = code);
    return club;
  })[0];


  console.log(club);

}

run();