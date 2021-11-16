import { parseLenex } from './lenex-parse.js'
import { AthleteElement, ClubElement, Event, LenexRaw } from './lenex-type.js';


type AcceptedInputTypes = string|Blob|Buffer|Uint8Array;


export class Lenex {
  
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
  private athleteMap: Record<string, AthleteElement>;
  /**
   * Maps club-ids to clubs
   */
  private clubsMap: Record<string, ClubElement>;
  /**
   * Maps club-codes to clubs
   */
  private clubsMapCode: Record<string, ClubElement>;
  
  constructor(file: AcceptedInputTypes) {      
    this.file = file;
    this.raw = null;
    this.athleteMap = {};
    this.eventsMap = {};
    this.clubsMap = {};
    this.clubsMapCode = {}
  }


  

  async init() {


    this.raw = await parseLenex(this.file);
    delete this.file;
    //console.log(JSON.stringify(this.raw, null, 2));

    this.eventsMap = this.raw.meets
      ?.flatMap(meet => meet.sessions)
      .flatMap(session => session.events)
      .reduce((prev, cur) => ({...prev, [cur.eventid]: cur}), {})?? {};
    
    this.athleteMap = this.raw.meets
      ?.flatMap(meet => meet.clubs)
      .filter(notNull)
      .flatMap(club => club.athletes?.map(athlete => 
        ({...athlete, club}))?? [])
      .reduce((prev, cur) => ({...prev, [cur.athleteid]: cur}), {})?? {};
      
    this.clubsMap = this.raw.meets
      ?.flatMap(meet => meet.clubs)
      .filter(notNull)
      .reduce((prev, cur) => ({...prev, [cur.clubid]: cur}), {})?? {};
    
    this.clubsMapCode = this.raw.meets
      ?.flatMap(meet => meet.clubs)
      .filter(notNull)
      .reduce((prev, cur) => ({...prev, [cur.code]: cur}), {}) ?? {};
  }

  get rawLenexData() {
    return JSON.parse(JSON.stringify(this.raw));
  }

  getEventById(id:string) {
    return this.eventsMap[id];
  }

  getAthleteById(id:string) {
    return this.athleteMap[id];
  }

  getClubById(id:string) {
    return this.clubsMap[id];
  }

  getClubByClubCode(clubCode:string) {
    return this.clubsMapCode[clubCode];
  }

  get constructorInfo() {
    return this.raw.constructor
  }

}

function notNull(a: any): boolean {
  return a != null;
}