import assert from "assert";
import { readFile } from "fs/promises";
import { Lenex } from "../src/index.js";



describe("lenex", ()=> {
  it("should load lenex file", async () => {
    const code = "STKP";

    const f = await readFile("./examples/STKP_BirsPlausch_Meldungen.lxf");

    const len = new Lenex(f);

    await len.init();

    const club = len.rawLenexData.meets?.map((m) => {
      const club = m.clubs?.find((c) => (c.code = code));
      return club;
    })[0];

    assert.notEqual(club, undefined);
  }) 

  it("should collapse collections", async () => {
    const f = await readFile("./examples/STKP_BirsPlausch_Meldungen.lxf");
    const len = new Lenex(f);
    await len.init();

    assert.equal(Array.isArray(len.rawLenexData.meets), true);
    const athlete = len.rawLenexData.meets[0].clubs[0].athletes[0];
    assert.equal(Array.isArray(athlete.entries), true )
  })
})