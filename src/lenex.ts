import { courses } from "./constants.js";
import { parseLenex } from "./lenex-parse.js";
import {
  EventAgeGroup,
  LenexRaw,
  MeetAthlete,
  MeetClub,
} from "./lenex-type.js";

type AcceptedInputTypes = Blob | Buffer | Uint8Array;

export class Lenex {
  readonly accepted_lenex_versions = [3, "3.0"];

  private file?: AcceptedInputTypes;
  /**
   * The raw date from the lenex file
   */
  private raw: LenexRaw;

  /**
   * Maps event-ids to events
   */
  private eventsMap: Record<string, Event>;
  
  /**
   * Maps athlete-ids to athletes
   */
  private athleteMap: Record<string, MeetAthlete>;
  /**
   * Maps club-ids to clubs
   */
  private clubsMap: Record<string, MeetClub>;
  /**
   * Maps club-codes to clubs
   */
  private clubsMapCode: Record<string, MeetClub>;

  /**
   * Maps age-group ids to age groups
   */
  private ageGroupMap: Record<string, EventAgeGroup>;

  private constructor(file: AcceptedInputTypes) {
    this.file = file;
    this.raw = null;
    this.athleteMap = {};
    this.eventsMap = {};
    this.clubsMap = {};
    this.clubsMapCode = {};
  }

  static async LoadLenexFile(file: AcceptedInputTypes): Promise<Omit<Lenex, "init"| "file">> {
    const lenex = new Lenex(file);
    await lenex.init();
    return lenex;
  }

  async init() {
    this.raw = await parseLenex(this.file);
    delete this.file;

    if (!this.accepted_lenex_versions.includes(this.raw.version)) {
      throw new Error(
        `Unsupported lenex version: ${
          this.raw.version
        } Supported versions: (${this.accepted_lenex_versions.join(", ")})`
      );
    }

    this.eventsMap =
      this.raw.meets
        ?.flatMap((meet) => meet.sessions)
        .flatMap((session) => session.events)
        .reduce((prev, cur) => ({ ...prev, [cur.eventid]: cur }), {}) ?? {};

    this.athleteMap =
      this.raw.meets
        ?.flatMap((meet) => meet.clubs)
        .filter(notNull)
        .flatMap(
          (club) =>
            club.athletes?.map((athlete) => ({ ...athlete, club })) ?? []
        )
        .reduce((prev, cur) => ({ ...prev, [cur.athleteid]: cur }), {}) ?? {};

    this.clubsMap =
      this.raw.meets
        ?.flatMap((meet) => meet.clubs)
        .filter(notNull)
        .reduce((prev, cur) => ({ ...prev, [cur.clubid]: cur }), {}) ?? {};

    this.clubsMapCode =
      this.raw.meets
        ?.flatMap((meet) => meet.clubs)
        .filter(notNull)
        .reduce((prev, cur) => ({ ...prev, [cur.code]: cur }), {}) ?? {};

    this.ageGroupMap =
      this.raw.meets
        ?.flatMap((m) => m.sessions)
        .flatMap((s) => s.events)
        .flatMap((e) => e.agegroups)
        .reduce((prev, a) => ({ ...prev, [a.agegroupid]: a }), {}) ?? {};
  }

  get rawLenexData(): LenexRaw {
    return JSON.parse(JSON.stringify(this.raw));
  }

  getEventById(id: string) {
    return this.eventsMap[id];
  }

  getAthleteById(id: string) {
    return this.athleteMap[id];
  }

  getAgeGroupById(id: string) {
    return this.ageGroupMap[id];
  }

  getClubById(id: string) {
    return this.clubsMap[id];
  }

  getClubByClubCode(clubCode: string) {
    return this.clubsMapCode[clubCode];
  }

  get constructorInfo() {
    return this.raw.constructor;
  }

  get meetCourse() {
    const c = this.raw.meets[0].course;
    return { type: c, ...courses[c] };
  }

  get clubCodes() {
    return Object.keys(this.clubsMapCode);
  }
}

function notNull(a: any): boolean {
  return a != null;
}
