export interface LenexRaw {
    /**
     * This element contains information about the software which created 
     * the Lenex file.
     */
    constructor:        Constructor;
    /**
     * Contains all the information of meets like athletes, relays, entries and 
     * results. 
     */
    meets?:             Meet[];
    /**
     * Contains different types of records (e.g. World records, Olympic records) including age group records.
     */
    recordlists?:       Recordlist[];
    /**
     * Contains different type of time standards and qualification times. 
     */
    timestandardlists?: TimeStandardList[];
    /**
     * The version number of the Lenex format.
     */
    version:            number;
}

export type DateOnly = string;
// TODO: set all daytime types.
/** Time string with format TODO */
export type DayTime = string;
// TODO: set all Reaction time types.
/** Reaction time string with format TODO */
export type ReactionTime = string;
// TODO: set all Swim time types.
/** Swim time string with format TODO */
export type SwimTime = string;
// TODO: set all Time types.
/** Time string with format TODO */
export type Time = string;

export type CurrencyFormat = string | number;

export enum Gender {
    F = "F",
    M = "M",
    X = "X",
}

export enum Round {
    /** This is used for finals including A, B, C, ... finals.  */
    FIN = "FIN",
    /** for prelims.  */
    PRE = "PRE",
    /** This is the default value. Used for an event with timed finals.  */
    TIM = "TIM",
    /**
     * Fastest heats of an event with timed finals. Events with this 
     * value for round should always refer to the corresponding timed 
     * final event, which should be of the same distance, stroke and age 
     * groups. Events with round set to FHT only make sence for the 
     * schedule and ENTRY objects, but never to be used for RESULT's. 
     */
    FTH = "FTH",
    /** for semi finals.  */
    SEM = "SEM",
    /** for quarterfinals. */
    QUA = "QUA",
    /** Swim-Off after prelims. */
    SOP = "SOP",
    /** Swim-Off after semi-finals. */
    SOS = "SOS",
    /** Swim-Off after quarterfinals. */
    SOQ = "SOQ",
}

export interface Constructor {
    /**
     * Contact information of the provider of the software, which created the Lenex file. 
     */
    contact:       ConstructorContact;
    /**
     * Name of the application that created the Lenex file. 
     */
    name:          string;
    /**
     * Name of user, to who the creator application was registered. 
     */
    registration?: string;
    /**
     * The version number of the application that created the Lenex file. 
     */
    version:       string | number;
}


export type OfficialContact = Omit<_Contact, "name">;
export type ConstructorContact = _Contact & { email: string }
export type MeetContact = _Contact;
export interface _Contact {
    /**
     * The city of the contact address.
     */
    city?:     string;
    /**
     * Country code of the contact address.
     */
    country?:  Country;
    /**
     * The e-mail address of the contact. The attribute is required in the context of a CONSTRUCTOR element only. 
     */
    email?:    string;
    /**
     * The fax number of the contact.
     */
    fax?:      string;
    /**
     * UNDOCUMENTED
     */
    fname?:    string;
    /**
     * The full URL of the website of the contact person or organisation. 
     * The http:// should be included in the string.
     */
    internet?: string;
    /**
     * The mobile phone number of the contact person.
     */
    mobile?:   string;
    /**
     * The full name of the contact person or the name of the organisation.
     * Not used in the OFFICIAL element
     */
    name?:     string;
    /**
     * The phone number of the contact person or the organisation.
     */
    phone?:    string;
    /**
     * UNDOCUMENTED
     */
    place?:    string;
    /**
     * state, province or county of the contact address.
     */
    state?:    string;
    /**
     * The first additional line of the address.
     */
    street?:   string;
    /**
     * The second additional line of the address.
     */
    street2?:  string;
    /**
     * The postal code of the address.
     */
    zip?:      string;
}

/**
 * This element contains all information of one meet, including events, athletes, relays, entries and results. 
 */
export interface Meet {
    /**
     * The date to be used to calculate the age of athletes. The default value
     * is the date of the first session and type by year of birth only. 
     **/
    agedate?:            AgeDate;
    /**
     * Height above sea level of the meet city.
     */
    altitude?:           number;
    /**
     * The name of the city where the meet was run. Should be the same as FACILITY.city 
     */
    city:               string;
    /**
     * Name of meet city in english.
     */
    "city.en"?:         string;
    /**
     * Collection of clubs of the meet. 
     */
    clubs?:             MeetClub[];
    /**
     * The contact address of the meet organizer.
     */
    contact?:           MeetContact;
    /**
     * The size of the pool. If the attribute is not available, all SESSION objects 
     * need to have a course attribute. 
     */
    course?:            Course;
    /**
     * The date for the entry deadline
     */
    deadline?:          DateOnly;
    /**
     * The exact time for the entry deadline.
     */
    deadlinetime?:      string;
    /**
     * The date from when (online) entries are open/available. 
     */
    entrystartdate?:    DateOnly;
    /**
     * The type of (online) entries: 
     */
    entrytype?:         EntryType;
    /**
     * The full address of the meets facility.
     */
    facility?:          Facility;
    /**
     * Fees used for this meet. On this level, different global fees for clubs, 
     * athletes and relays are allowed. If there are fees that have to be paid 
     * per entry, the FEE element in the EVENT objects should be used. 
     */
    fees?:              FeeElement[];
    /**
     * The executing federation or club of the meet (e.g. the German 
     * Swimming Federation, if the European Champ was held in Berlin). 
     */
    hostclub?:          string;
    /**
     * A website url, that directs to the executing club for the meet
     */
    "hostclub.url"?:    string;
    /**
     * The maximum number of individual entries per athlete in this session. 
     */
    maxentriesathlete?: number;
    /**
     * The maximum number of relay entries per club in this session. 
     */
    maxentriesrelay?:   number;
    /**
     * The name of the meet. Normally the name should not contain a full 
     * date (maybe the year only) and/or a city or pool name. 
     */
    name:               string;
    /**
     * Meet name in english.
     */
    "name.en"?:         string;
    /**
     * The three letter code of the nation of the meet city. This should be the same as FACILITY.nation
     */
    nation:             Nation;
    /**
     * The sanction number for the meet by the federation. 
     */
    number?:            string|number;
    /**
     * The organisation which promotes the meet (e.g. FINA for the World Championships). 
     */
    organizer?:         string;
    /**
     * A website url, that directs to the organizer of the meet.
     */
    "organizer.url"?:   string;
    /**
     * Description of the point table used for scoring.
     */
    pointtable?:        PointTable;
    /**
     * Details about the pool where the meet took place. 
     */
    pool?:              Pool;
    /**
     * Details about how qualification times for entries are defined. 
     */
    qualify?:           Qualify;
    /**
     * The number of reserve swimmers in finals and semifinals. 
     */
    reservecount?:      number;
    /**
     * A website url, that directs to the results page. This should be a deep 
     * (direct) link to the result lists and not the general website of a meet. 
     */
    "result.url"?:      string;
    /**
     * Description of all events grouped by session. 
     */
    sessions:           Session[];
    /**
     * 1 start rule or 2 start rule.
     */
    startmethod?:       number;
    /**
     * The global unique meet id given by swimrankings.net. 
     */
    swrid?:             string;
    /**
     * UNDOCUMENTED in current version of LENEX (3.0, 2021-11-16)
     * State where the meeting is held. Same as FACILITY.state
     */
    state?:             string;
    /**
     * The type of timing for a meet.
     */
    timing?:            Timing;
    /**
     * The meet type. The following values are allowed: 
     * * The default value is empty. This applies for normal meets that are 
     *   run according to the FINA rules. 
     * * All other values depend on definitions of national federations. 
     */
    type?:              string;
    /**
     * The date for withdrawals from the entry list. 
     */
    withdrawuntil?:     DateOnly;
}

export enum EntryType {
    /** The meet is open for all clubs. */
    OPEN = "OPEN",
    /** The meet is open to invited clubs only.  */
    INVITATION = "INVITATION",
}

/**
 * The AGEDATE is the date used to calculate the age of an athlete.
 */
export interface AgeDate {
    /**
     * The type describes, how the age is calculated.
     */
    type:  AgedateType;
    value: DateOnly;
}

export enum AgedateType {
    CanFnq = "CAN.FNQ",
    Date = "DATE",
    Por = "POR",
    Year = "YEAR",
    Lux = "LUX",
}

export type RecordListClub = Omit<_Club,"athletes" | "contact" | "number" | "relays">;
export type MeetClub = _Club;
export interface _Club {
    /**
     * The athletes of this club. 
     */
    athletes?:       MeetAthlete[];
    /**
     * UNDOCUMENTED.
     * The id of this club.
     */
    clubid?:         string|number;
    /**
     * The official club code given by the national federation. 
     * Only official club codes should be used here! 
     */
    code?:           string;
    /**
     * Contact address for the specific meet.
     */
    contact?:        MeetContact;
    /**
     * The full name of the club or the team. 
     */
    name:           string;
    /**
     * The club name in english. 
     */
    "name.en"?:      string;
    /**
     * Nation of this club.
     */
    nation?:         Nation;
    /**
     * This value can be used to distinguish different teams of the same club in a meet entries or results file.
     */
    number?:         number;
    /**
     * The officials from this club. 
     */
    officials?:      Official[];
    /**
     * The code of the regional or local swimming committee. 
     * Only official codes should be used here!  
     */
    region?:         string;
    /**
     * The relay teams of this club.
     */
    relays?:         MeetRelay[];
    /**
     * A short version of the club name. This string is limited to 20 characters. 
     */
    shortname?:      string;
    /**
     * The short version of the club name in english. 
     */
    "shortname.en"?: string;
    /**
     * The global unique club id given by swimrankings.net. 
     */
    swrid?:          number;
    type?:           ClubType;
}

export type MeetAthlete = _Athlete & {
    /**
     * The id attribute should be unique over all athletes of a meet. It is 
     * required for ATHLETE objects in a meet sub tree. 
     */
    athleteid:      number;
    /**
     * All entries of the athlete.
     */
    entries?:       Entry[];
    /**
     * The registration number given by the national federation. 
     * This number should be looked at together with the nation of the 
     * club the athlete is listed in the Lenex file. 
     */
    license?:    string;
    /**
     * All results of the athlete. 
     */
    results?:    Result[];
};

export type RecordAthlete = _Athlete & {
    /**
     * The club or team for the athlete, when he swam the record.
     */
    club?:       RecordListClub;
};

interface _Athlete {
    /**
     * The id attribute should be unique over all athletes of a meet. 
     * It is required for ATHLETE objects in a meet sub tree. 
     */
    athleteid?:   number;
    /**
     * The date of birth for the athlete. 
     * If only the year of birth is known, the date should be set to January 1st of that year. 
     */
    birthdate:  DateOnly;
    /**
     * UNDOCUMENTED.
     */
    externalid?: string|number;
    /**
     * The first name of the athlete. 
     */
    firstname:   string;
    /**
     * The first name in english. 
     */
    "firstname.en"?: string;
    /**
     * Gender of the athlete. Values can be male (M) and female (F).
     */
    gender:      Gender;
    /**
     * Information about the handicap classes of a swimmer.
     */
    handicap?:   Handicap;
    /**
     * The last name of the athlete.
     */
    lastname?:   string;
    /**
     * The last name in english.
     */
    "lastname.en"?:   string;
    /**
     * The level of the athlete (used with levels in AGEGROUP).
     */
    level?:      string;
    /**
     * An optional name prefix. For example for Peter van den Hoogenband, 
     * this could be "van den".
     */
    nameprefix?: string;
    nation?:     Nation;
    /** 
     * The global unique athlete id given by swimrankings.net. 
     */
    swrid?:      number;
}

/**
 * This element is used in entries and records for general information about a meet.
 */
export type RecordMeetInfo = _MeetInfo & {
    /**
     * The city name where the meet took place. 
     */
    city:       string;
    /**
     * The date of the swim of the record or qualification time achievement. 
     */
    date:       DateOnly;
    /**
     * The nation of the city for the meet.
     */
    nation?:     Nation;
};

export type RaceMeetInfo = _MeetInfo & {
    /**
     * Contains a code for the organisation, who approved the qualification 
     * time, e.g. FINA, LEN or a IOC nation code. If this field is empty, the 
     * qualification time was not approved.
     */
    approved?: string;
    /**
     * This attribute indicates the pool length, where the qualification time 
     * was achieved.
     */
    course?:     Course;
    /**
     * The qualification time, since this can be different to the entry time. If 
     * the value is missing, the entry time is the qualification time
     */
    qualificationtime: SwimTime;
};

/**
 * This element is used in entries and records for general information about a meet. 
 */
export interface _MeetInfo {
    /**
     * The day time of the swim. 
     */
    daytime:    Time;
    /**
     * The meet name. 
     */
    name?:       string;
    /**
     * The details about the pool.
     */
    pool?: Pool;
    /**
     * UNDOCUMENTED.
     */
    meetinfoid?: string;
    /**
     * The state of the city for the meet. 
     */
    state: string;
}

export enum Course {
    LCM = "LCM",
    SCM = "SCM",
    SCY = "SCY",
    SCM16 = "SCM16",
    SCM20 = "SCM20",
    SCM33 = "SCM33",
    SCY20 = "SCY20",
    SCY27 = "SCY27",
    SCY33 = "SCY33",
    SCY36 = "SCY36",
    OPEN = "OPEN",
}

export enum EntryStatus {
    /** athlete/relay did not finish. */
    DNF = "DNF",
    /** athlete/relay did not start (no reason given or to late withdrawl).  */
    DNS = "DNS",
    /** athlete/relay disqualified. */
    DSQ = "DSQ",
    /** exhibition swim.  */
    EXH = "EXH",
    /** athlete is sick.  */
    SICK = "SICK",
    /** UNDOCUMENTED */
    SUIRED10 = "SUI.RED10",
    /** athlete/relay was withdrawn (on time). */
    WDR = "WDR",
}

export interface Handicap {
    /** The handicap class for breaststroke. */
    breast?: HandicapClass;
    /** The handicap class for freestyle, backstroke and fly */
    free?:    HandicapClass;
    /** The handicap class for individual medley */
    medley?: HandicapClass;
    /** Additional information about handicap.  */
    exception? :string;
}

export enum HandicapClass {
    "C0" = 0,
    "C1" = 1,
    "C2" = 2,
    "C3" = 3,
    "C4" = 4,
    "C5" = 5,
    "C6" = 6,
    "C7" = 7,
    "C8" = 8,
    "C9" = 9,
    "C10" = 10,
    "C11" = 11,
    "C12" = 12,
    "C13" = 13,
    "C14" = 14,
    "C15" = 15,
    /** swimmers with a minor disability  */
    "GER.AB" = "GER.AB",
    /** swimmers with a mental handicap  */
    "GER.GB" = "GER.GB",
}

export interface Result {
    /**
     * Additional comment e.g. for new records or reasons for 
     * disqualifications. 
     */
    comment?:        string;
    /** UNDOCUMENTED */
    entrycourse?:    Course;
    /** UNDOCUMENTED */
    entrytime?:      string;
    /**
     * Reference to the EVENT element using the id attribute.
     */
    eventid:         number;
    /**
     * Reference to a heat (HEAT element in HEATS collection of the 
     * EVENT element). 
     */
    heatid?:         number;
    /** The lane number of the entry. */
    lane?:           number;
    /** UNDOCUMENTED */
    late?:           "yes";
    /**
     * The number of points for the result according to the scoring table used in a meet.
     */
    points?:         number;
    /**
     * The reaction time at the start. For relay events it is the reaction time of 
     * the first swimmer.
     */
    reactiontime?:   ReactionTime;
    /**
     * The information about relay swimmers in this result. Only allowed for 
     * relay RESULT objects.
     */
    relaypositions?: MeetRelayPosition[];
    /**
     * Each result needs a unique id which should be unique over a meet.
     */
    resultid:        string;
    /**
     * The split times for the result. In a Lenex file, split times are always 
     * saved continuously. 
     */
    splits?:         Split[];
    /**
     * This attribute is used for the result status information. An empty status attribute means a regular result.
     */
    status?:         EntryStatus;
    /**
     * The final time of the result in the swim time format. 
     */
    swimtime:        SwimTime;
}

export type MeetRelayPosition = _RelayPosition & {
/**
 * A reference to the ATHLETE element of the athlete. This attribute is 
 * allowed in the context of a meet sub tree only. 
 */
    athleteid?:    number;
};

export type RecordRelayPosition = _RelayPosition & {
   /**
    * Last name, first name, etc. of the athlete. This element is allowed in 
    * the context of a record only and in this case it is required.
    */
    athlete: RecordAthlete;
}

export type EntryRelayPosition = _RelayPosition & {
    /**
     * This element contains the information, where the entry time was 
     * achieved. This element is only allowed in the context of a relay entry. 
     */
    meetinfo?:  RaceMeetInfo;
}

interface _RelayPosition {
    /**
     * The number of the swimmer in the relay. The first swimmer is 1, the 
     * second 2 and so on. -1 can be used to add reserve swimmers.
     */
    number:        number;
    /**
     * The reaction time at the start of the first swimmer and the relay take   
     * over times for other swimmers. 
     */
    reactiontime?: ReactionTime;
    /**
     * No status attribute means the swimmer finished his part correctly. 
     * Otherwise, the following values are allowed: 
     * * DSQ: relay athlete was disqualified. 
     * * DNF: relay athlete did not finish. 
     */
    status?:       "DSQ" | "DNF";
}

/**
 * This  element  contains  information  about  a  single  split  time.  
 * In  a  Lenex  file,  split  times  are  always  saved 
 * continuously.
 */
export interface Split {
    /** The distance where the split time was measured. */
    distance: number;
    /** The time of the result in the swim time format. */
    swimtime: SwimTime;
}
/**
 * This element contains all information about an official.
 */
export interface Official {
    /**
     * The contact information of  the official. 
     */
    contact?:    OfficialContact;
    /**
     * The first name if the official. 
     */
    firstname:  string;
    /**
     * Gender of the official. Values can be male (M) and female (F).
     */
    gender:     Gender;
    /**
     * The grade of the judge. The value here is specific to national 
     * federations and depends on their officials education system. 
     */
    grade?:      string;
    /**
     * The last name of the official. 
     */
    lastname:   string;
    /**
     * The registration number given by the national federation.  
     */
    license?:   string;
    /**
     * An optional name prefix. For example for Peter van den Hoogenband, 
     * this could be "van den". 
     */
    nameprefix?: string;
    nation?:    Nation;
    /**
     * The id attribute should be unique over all officials of a meet. It is 
     * required for JUDGE objects in a meet sub tree. 
     */
    officialid?: number;
    /**
     * The passport number of the official. 
     */
    passport?: string;
}

export type MeetRelay = _Relay & {
    /**
     * The maximum age allowed for the oldest swimmer in the team. The value -1 means no upper bound.
     */
    agemax:      number;
    /**
     * The minimal age allowed for the youngest swimmer in the team. The 
     * value -1 means no lower bound. 
     */
    agemin:      number;
    /**
     * The maximum total age of all swimmers in the relay team. The value  
     * -1 means that the total age is unknown
     */
    agetotalmax: number;
    /**
     * The minimum total age of all swimmers in the relay team. The value -1 
     * means that the total age is unknown. 
     */
    agetotalmin: number;
    /**
     * All entries of the relay team. 
     */
    entries?:    Entry[];
    /**
     * The gender of the relay team. Acceptable values are male (M), female 
     * (F) or mixed (X).
     */
    gender:      Gender;
    /**
     * For relays with handicapped swimmers. The default value is 0.
     */
    handicap?:    RelayHandicap;
    /**
     * The team number of the relay team. This number is only necessary, if 
     * there are different teams of the same club in the same agegroups / 
     * events.
     */
    number?:     number;
    /**
     * All results of the relay team. 
     */
    results?:    Result[];
}
export type RecordRelay = _Relay & {
    /**
     * The club or team of the relay in the context of a record. 
     */
    club?: RecordListClub;
    /**
     * The relay swimmers in the context of a relay record. 
     */
    relaypositions?:    RecordRelayPosition[];
}

export interface _Relay {
    /** The name of the relay team. */
    name?:       string;
    /** UNDOCUMENTED */
    relayid?:    string|number;
}
/**
 * This element contains the information for a single entry of an athlete or a relay to a specific round of a meet. 
 * 
 * The combination  of the  attributes eventid, heatid and  lane should be unique over all ENTRY objects of the 
 * same meet.
 */
export interface Entry {
    /**
     * Reference to an age group (AGEGROUP element in the 
     * AGEGROUPS collection of the EVENT element). 
     */
    agegroupid?: number;
    /**
     * This attribute indicates a pool length for the entry time. This is 
     * necessary when special seeding rules are used. See section 5.4. for 
     * acceptable values. 
     */
    entrycourse?: Course;
    /**
     * The entry time in the swim time format. 
     */
    entrytime?: SwimTime;
    /**
     * Reference to the EVENT element using the id attribute. 
     */
    eventid: number;
    /**
     * Reference to a heat (HEAT element in HEATS collection of the 
     * EVENT element).
     */
    heatid?: number;
    /**
     * The lane number of the entry. 
     */
    lane?: number;
    /**
     * This element contains the information, about a qualification result for 
     * the entry time was achieved. 
     */
    meetinfo?: RaceMeetInfo;
    /**
     * Only for relay entries. This element contains references to the relay 
     * swimmers. 
     */
    relaypositions?: EntryRelayPosition[];
    /**
     * This attribute is used for the entry status information. An empty status 
     * attribute means a regular entry. The following values are allowed: 
     * * EXH: exhibition swim. 
     * * RJC: rejected entry 
     * * SICK: athlete is sick. 
     * * WDR: athlete/relay was withdrawn.
     */
    status?: "" | "EXH" | "RJC" | "SICK" | "WDR" ;
}

export enum RelayHandicap {
    RC0 = "0",
    /** relay with athletes with a mental handicap. */
    RC14 = "14",
    /** relay athletes of a total of 0-20 handicap points.  */
    RC20 = "20",
    /** relay athletes of a total of 21-34 handicap points.  */
    RC34 = "34",
    /** relay athletes of a total of 35 handicap points or more or blind athletes */
    RC49 = "49",
}

export enum ClubType {
    /** This is the default value.  */
    CLUB = "CLUB",
    /** 
     * The club represents a national team of a 
     * federation. In this case, the code, region and nation attribute 
     * should be the same. 
     */
    NATIONALTEAM = "NATIONALTEAM",
    /**
     * The club represents a regional team. In this 
     * case, the code and region attribute should be the same.
     */
    REGIONALTEAM = "REGIONALTEAM",
    /**
     * To be used for the CLUB entry, that contains data 
     * of athletes, where the club is unknown. In this case, the attribute 
     * name and the CONTACT element are not required. 
     */
    UNATTACHED = "UNATTACHED",
}

/**
 * This element contains name and full address of meets facility.
 */
export interface Facility {
    /**
     * The city of the facility. 
     */
    city:    string;
    /**
     * The name of the facility (e.g. "Aquatic Center").
     */
    name?:   string;
    /**
     * 
     */
    nation:  Nation;
    /**
     * The state, province or county of the address.
     */
    state?:  string;
    /**
     * The first additional line of the address.
     */
    street?: string;
    /**
     * The second additional line of the address.
     */
    street2?: string;
    /**
     * The postal code of the address.
     */
    zip?:    string;
}



export enum Currency {
/** * Australian dollar
 */
AUD = "AUD",
/** * Brazilian real
 */
BRL = "BRL",
/** * Canadian dollar
 */
CAD = "CAD",
/** * Swiss franc
 */
CHF = "CHF",
/** * Danish krone
 */
DKK = "DKK",
/** * Algerian dinar
 */
DZD = "DZD",
/** * British pound
 */
GBP = "GBP",
/** * Indonesian rupiah
 */
DR = "DR",
/** * Euro
 */
EUR = "EUR",
/** * Croatian Kuna
 */
HRK = "HRK",
/** * Indian rupee
 */
INR = "INR",
/** * Iraqi dinar
 */
IQD = "IQD",
/** * Iranian rial
 */
IRR = "IRR",
/** * Japanese yen
 */
JPY = "JPY",
/** * Korea won
 */
KRW = "KRW",
/** * Kuwaiti dinar
 */
KWD = "KWD",
/** * Mexican peso
 */
MXP = "MXP",
/** * Nigerian naira
 */
NGN = "NGN",
/** * Norwegian krone
 */
NOK = "NOK",
/** * New Zealand dollar
 */
NZD = "NZD",
/** * Philippine peso
 */
PHP = "PHP",
/** * Pakistan rupee
 */
PKR = "PKR",
/** * Paraguay guarani
 */
PYG = "PYG",
/** * Russian rouble
 */
RUR = "RUR",
/** * Saudi Arabian riyal
 */
SAR = "SAR",
/** * Swedish krona
 */
SEK = "SEK",
/** * Tunisian dinar
 */
TND = "TND",
/** * US dollar
 */
USD = "USD",

}

export enum FeeType {
    Athlete = "ATHLETE",
    LateentryIndividual = "LATEENTRY.INDIVIDUAL",
    LateentryRelay = "LATEENTRY.RELAY",
    Relay = "RELAY",
}

/**
 * This element is used to describe the point scoring used for a meet.
 */
export interface PointTable {
    /**
     * The name of the point score system. 
     */
    name:         PointtableName;
    /**
     * Common point tables have a unique id. Details are in chapter 5.5. of the lenex spec
     * http://www.swimrankings.net/files/Lenex_PointTable.txt 
     */
    pointtableid?: number;
    /**
     * The version number/year of the point score system.
     */
    version:      string|number;
}

export enum PointtableName {
    DSVMasterPerformanceTable = "DSV Master Performance Table",
    FINAPointScoring = "FINA Point Scoring",
    KNZBNEDWPSRankings = "KNZB NED WPS Rankings",
}

/**
 * This element contains information about details, how qualification entrytimes are defined. 
 */
export interface Qualify {
    /**
     * The way, how times are converted for seeding.
     */
    conversion?: Conversion;
    /**
     * The first day of the qualification period for entry times.
     */
    from?:       DateOnly;
    /**
     * The percentage for conversion PERCENT_LINEAR. 
     */
    percent?:    number;
    /**
     * The last day of the qualification period for entry times. If it is missing, 
then the default is the last day before the first day of the meet.
     */
    until?:      DateOnly;
}

/**
 * The way, how times are converted for seeding. 
 */
export enum Conversion {
    /**
     * This is the default value. No conversion will be done. 
     */
    NONE = "NONE",
    /**
     * Entry times, flaged with a course other than the 
     * event course will be converted by calculating the FINA points and 
     * from there calculating back to a swim time.
     */
    FINA_POINTS = "FINA_POINTS",
    /**
     * Here the conversion will be done by adding / 
     * subtracting a certain percantage to the original entry time.
     */
    PERCENT_LINEAR = "PERCENT_LINEAR",
    /**
     * In this case, entries that are flaged 
     * with the event course will be seeded first, all other entries will be 
     * seeded after these. 
     */
    NON_CONFORMING_LAST = "NON_CONFORMING_LAST",
}

/**
 * This element is used to describe one session of a meet.
 */
export interface Session {
    /**
     * With indicating a pool length per session, 
     * the global value of the meet can be overridden,
     * e.g. if the prelim sessions are short course 
     * and the finals are long course.
     */
    course?:            Course;
    /**
     * The date of the session. 
     */
    date:               DateOnly;
    /**
     * The daytime when the session starts. 
     */
    daytime?:           string;
    /**
     * The time when the session ended.
     */
    endtime?:           string;
    /**
     * The events of the session
     */
    events:             Event[];
    /**
     * Fees used for this session. On this level, different global fees for clubs, 
     * athletes and relays are allowed. If there are fees that have to be 
     * paid per entry, the FEE element in the EVENT objects should be used. 
     */
    fees?:               FeeElement[];
    /**
     * The judges of the session. 
     */
    judges?:            Judge[];
    /**
     * The maximum number of individual entries per athlete in this session. 
     */
    maxentriesathlete?: number;
    /**
     * The maximum number of relay entries per club in this session.
     */
    maxentriesrelay?:   number;
    /**
     * Additional name for the session e.g. "Day 1 - Prelims". 
     */
    name?:              string;
    /**
     * The number of the session. Session numbers in a meet have to be unique. 
     */
    number:             number;
    /**
     * The daytime when the officials meeting starts. 
     */
    officialmeeting?:   string;
    /**
     * The details about the pool, if they are different per session. Otherwise use the element in MEET. 
     */
    pool?:              Pool;
    /**
     * Additional remarks given by the referee.
     */
    remarksjudge?:      string;
    /**
     * The daytime when the team leaders meeting starts.
     */
    teamleadermeeting?: string;
    /**
     * The type of timing for a session. If missing, the global value for the meet should be used. See MEET for acceptable values. 
     */
    timing?:            Timing;
    /**
     * The daytime when the warmup starts.
     */
    warmupfrom?:        string;
    /**
     * The daytime when the warmup ends.
     */
    warmupuntil?:       string;
}

/**
 * This element is used to describe the pool where the meet took place.
 */
export interface Pool {
    /**
     * Number of the last lane used in the pool for the meet. 
     * The number of lanes can be calculated with LANEMAX - LANEMIN + 1. 
     */
    lanemax?:  number;
    /**
     * Number of the first lane used in the pool for the meet.
     */
    lanemin?: number;
    /**
     * The water temperature.
     */
    temperature?: number;
    /**
     * The type of the pool.
     */
    type?:   PoolType;
}

export enum PoolType {
    INDOOR = "INDOOR",
    OUTDOOR = "OUTDOOR",
    LAKE = "LAKE",
    OCEAN = "OCEAN"
}

/**
 * This element contains all information of an event. 
 * For events with finals, there has to be an EVENT element for each round.
 */
export interface Event {
    /**
     * The AGEGROUPS collection contains the descriptions for the age 
     * groups in this event. For Open/Senior events, AGEGROUPS is only 
     * needed with one AGEGROUP element as a placeholder for the 
     * RANKINGS element (for places in result lists). If round="FHT", then 
     * no AGEGROUPS element is allowed. 
     * 
     * TODO
     */
    agegroups?:        EventAgeGroup[];
    /**
     * The daytime of the start of the event.
     */
    daytime?:          DayTime;
    /**
     * Every event needs to have an id attribute, so that it can be referenced 
     * by ENTRY and RESULT objects. The id attribute has to be unique 
     * over all EVENT objects of all sessions of a meet. 
     */
    eventid:           number;
    /**
     * The entry fee for this event. If there are global fees per athlete, relay 
     * and/or meet, the FEE elements in the MEET element should be used.
     */
    fee?:              SingleFee;
    /**
     * The gender of the event. The default value is all (A). Other values 
     * allowed are male (M), female (F) and mixed (X). Mixed is only used for 
     * relays.
     */
    gender?:           Gender;
    /**
     * Collection with all heats in the event.
     */
    heats?:            Heat[];
    /**
     * The maximum number of entries per club in this event. To limit the 
     * number of entries per athlete or relay, use the maxentries attribute in 
     * the MEET element.
     */
    maxentries?:        number;
    /**
     * The number of the event. The event numbers should be unique over 
     * all events of a meet. The EVENT objects of the different rounds for the 
     * same event may have the same event number.
     */
    number:            number;
    /**
     * This value can be used to define the order of the events within a 
     * session if it is not by the event number and if there are no start times 
     * for the events.
     */
    order?:            number;
    /**
     * This value is a reference to a previous event's id. (e.g. the prelims 
     * events for final events). The default value  is -1 and means, that there 
     * was no previous event. 
     */
    preveventid?:      number;
    round?:            Round;
    /** Used if there is more than one swim-off necessary. Default value is 1. */
    run?:               number;
    /**
     * The SWIMSTYLE element contains information about distance and 
     * stroke of the event. 
     */
    swimstyle:         Swimstyle;
    /**
     * A list of references to TIMESTANDARDREF elements with references 
     * to time standard lists to be used for this event. 
     */
    timestandardrefs?: TimeStandardRef[];
    /**
     * The type of timing for an event. If missing, the session should be 
     * checked and finally the value for the meet should be used.
     */
    timing?:           Timing;
    /**
     * The default value is empty. This applies for regular events that are 
     * run according to the FINA rules. 
     * MASTERS: Master results to be used for master rankings/records. 
     */
    type?:             AgegroupType;
}

export type EventAgeGroup = _AgeGroup & {
    /**
     * Only for events, every AGEGROUP element needs an id, because the 
     * objects can be referenced from ENTRY objects. The id has to be 
     * unique within an AGEGROUPS collection. 
     */
    agegroupid: number;
    /**
     * In mixed events, the gender can be specifiedin the AGEGROUP 
     * objects. Values can be male (M), female (F) or mixed (X). Mixed is 
     * only used for relays. This can be useful to define events with gender 
     * set to all (A), but the ranking is separated. This attribute is not allowed 
     * in the context of a RECORDLIST or TIMESTANDARDLIST element.
     */
    gender?:    Gender;
}
export type RecordAgeGroup = _AgeGroup;
export interface _AgeGroup {
    /**
     * Only for events, every AGEGROUP element needs an id, because the 
     * objects can be referenced from ENTRY objects. The id has to be 
     * unique within an AGEGROUPS collection. 
     */
    agegroupid?: number;
    /**
     * The upper bound of the age range. -1 means no upper bound. 
     */
    agemax:     number;
    /**
     * The lower bound of the age range. -1 means no lower bound. 
     */
    agemin:     number;
    /**
     * Information for relay events about how the age is calculated:
     */
    calculate?: AgeGroupCalc;
    /**
     * The handicap class for the agegroup. This is used to group results by 
     * disability categories. Allowed values are: 
     * * 1 - 15, 20, 34, 49 standard handicap classes
     */
    handicap?:   string; // todo
    /**
     * The maximum level (A-Z) of the agegroup. If the value is missing, this 
     * means no upper bound.
     */
    levelmax?:  string;
    /**
     * The minimum level (A-Z) of the agegroup. If the value is missing, this 
     * means no lower bound. 
     */
    levelmin?:  string;
    /**
     * comma separated list of codes of allowed athlete levels.
     */
    levels?:    string;
    /**
     * The name of the age group (e.g. "Juniors").
     */
    name?:      string;
    /**
     * A collection with references to results ranked in this agegroup. 
     */
    rankings?:  Ranking[];
    /** UNDOCUMENTED */
    type?:      "MASTERS";
}

export enum AgeGroupCalc {
    /**
     * The total age of all swimmers has to be in the given range
     */
    TOTAL = "TOTAL",
    /** 
     * This is the default value. The age of each relay swimmer 
     * has to be in the given range.
     */
    SINGLE = "SINGLE",
}
/**
 * This element describes one entry in the rankings of one agegroup. It contains the place and a reference to a 
 * result (individual or relay).
 */
export interface Ranking {
    /**
     * This value can be used to define the order of the results. If it is 
     * missing, the value for place is used to sort the elements in a 
     * collection. 
     */ 
    order?:    number;
    /**
     * The final position in the result list for the current event/round. 
     */
    place:    number;
    /**
     * A reference to the RESULT element. 
     */
    resultid: number;
}

export enum AgegroupType {
    MASTERS = "MASTERS",
}


export type SingleFee = _Fee;
export type FeeElement = _Fee & {
    type:      FeeType;
}
/**
 * The fee is used in MEET and EVENT objects.
 */
interface _Fee {
    currency?: Currency | string;
    value:     CurrencyFormat;
}

/**
 * The heat is used to define more details in the start list (e.g. schedule)
 */
export interface Heat {
    /**
     * Reference to an age group (AGEGROUP element in the 
     * AGEGROUPS collection of the EVENT element).
     */
    agegroupid?: string;
    /**
     * The daytime of the start of the event.
     */
    daytime?:    DayTime;
    /**
     * This value is used to identify A, B, ... finals.
     */
    final?:      FinalType;
    /**
     * The id attribute should be unique over all heats of a meet. It is 
     * required when you have ENTRY / RESULT objects that reference to a 
     * heat. 
     */
    heatid:      number;
    /**
     * The number of the heat. The heat numbers have to be unique within 
     * one event, also in a case when you have A finals in different 
     * agegroups.
     */
    number:      number;
    /**
     * This value can be used to define the order of the heats within an event 
     * if it is not by the heat number and if there are no start times for the 
     * heats. 
     */
    order?:      number;
    /**
     * The status of the heat
     */
    status?:     HeatStatus;
}

export enum FinalType {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}
/**
 * The status of the heat.
 */
export enum HeatStatus {
    OFFICIAL = "OFFICIAL",
    INOFFICIAL = "INOFFICIAL",
    SEEDED = "SEEDED",
}

/**
 * This element is used to describe one swim style.
 */
export interface Swimstyle {
    /** 
     * A code (max. 6 characters) of the swim style if the stroke is unknown. 
     */
    code?:        string;
    /**
     * The distance for the event. For relay events it is the distance for one 
     * single athlete. 
     */
    distance:     number;
    /**
     * The full descriptive name of the swim style if the stroke is unknown 
     * (e.g. "5 x 75m Breast with one Arm only"). 
     */
    name?:        string;
    /**
     * The number of swimmers per entry / result. Value 1 means, that it is 
     * an individual event. All other values mean, that it is a relay event. 
     */
    relaycount:   number;
    stroke:       Stroke;
    /**
     * The id attribute is important for SWIMSTYLE objects, where the stroke 
     * attribute is "UNKNOWN". In this case, the id should be a unique value 
     * to help to identify the swim style. 
     */
    swimstyleid?: number;
    /**
     * The technique of the style. If this attribute is missing or empty, it 
     * means normal swimming. All other values are mainly used for 
     * technical events in meets for kids.
     */
    technique?:   Technique;
}

export enum Stroke {
    /** for apnea (fin swimming).  */
    APNEA = "APNEA",
    /** for backstroke.  */
    BACK = "BACK",
    /** for bi-fins (fin swimming). */
    BIFINS = "BIFINS",
    /** for breaststroke. */
    BREAST = "BREAST",
    /** for fly or butterfly. */
    FLY = "FLY",
    /** for freestyle. */
    FREE = "FREE",
    /** for immersion (fin swimming). */
    IMMERSION = "IMMERSION",
    /** 
     * for relays where each athletes swims all strokes like 
     * in an individual medley event. 
     */
    IMRELAY = "IMRELAY",
    /**
     * for individual and relay medley. The order of stroke is 
     * according to FINA rules: Fly, back, breast, free for individual 
     * events. Back, breast, fly, free for relay events. 
     */
    MEDLEY = "MEDLEY",
    /** for surface (fin swimming).  */
    SURFACE = "SURFACE",
    /**
     * for all special events. In this case, the name attribute 
     * of the event is mandatory.
     * 
     * TODO
     */
    UNKNOWN = "UNKNOWN",
}

export enum Technique {
    /** for swimming under water.  */
    DIVE = "DIVE",
    /**  for gliding only. */
    GLIDE = "GLIDE",
    /** for kick only (Swimming with legs, no arms used).  */
    KICK = "KICK",
    /** for pull only (Swimming with arms, no legs used).  */
    PULL = "PULL",
    /** for start only */
    START = "START",
    /**  for turn only. */
    TURN = "TURN"
}

/**
 * This element describes a reference from a meet to a time standard list.
 */
export interface TimeStandardRef {
    /**
     * An optional element with a fine for missed time standards. 
     */
    fee?:               SingleFee;
    /**
     * An optional string to be used to mark the result, if the time standard 
     * was missed. Or to mark a result if a qualification time was fulfilled. 
     */
    marker?:             string;
    /**
     * The id of the time standard list element. 
     */
    timestandardlistid: number;
}
/**
 * This element contains information to attach an official to a session with his role in the session.
 */
export interface Judge {
    /**
     * The number for judges where there are more than one. This can be 
     * used for example for the lane number for timekeepers.
     */
    number?:    string;
    /**
     * A reference to a OFFICIAL element.
     */
    officialid: number;
    /**
     * Additional information for the judge.
     */
    remarks?: string;
    /**
     * Indicates the role of a judge. The list is built according to the FINA 
     * descriptions.
     */
    role?:       Role;
}

export enum Role {
    /** other or unknown. This is the default value.  */
    OTH = "OTH",
    /**  The meet director.  */
    MDR = "MDR",
    /**  The technical delegate.  */
    TDG = "TDG",
    /**  The referees.  */
    REF = "REF",
    /**  The starters.  */
    STA = "STA",
    /**  The announcers or speakers.  */
    ANN = "ANN",
    /**  The judge of strokes.  */
    JOS = "JOS",
    /**  The chief timekeeper  */
    CTIK = "CTIK",
    /**  The timekeepers  */
    TIK = "TIK",
    /**  The chief finish judge  */
    CFIN = "CFIN",
    /**  The finish judges  */
    FIN = "FIN",
    /**  The chief inspectors of turns.  */
    CIOT = "CIOT",
    /**  The inspectors of turns.  */
    IOT = "IOT",
    /**  The false start rope personnel.  */
    FSR = "FSR",
    /**  The clerks of course.  */
    COC = "COC",
    /**   The chief recorders.  */
    CREC = "CREC",
    /**  The recorders.  */
    REC = "REC",
    /**  Control room supervisor  */
    CRS = "CRS",
    /**  Control room (computerroom)  */
    CR = "CR",
    /**  Medical service  */
    MED = "MED",
}

export enum Timing {
    /** A full automatic timing system was used.  */
    AUTOMATIC = "AUTOMATIC",
    /** Automatic start, manual button for end time  */
    SEMIAUTOMATIC = "SEMIAUTOMATIC",
    /** Timing was done with one manual times per lane.  */
    MANUAL1 = "MANUAL1",
    /** Timing was done with two manual times per lane.  */
    MANUAL2 = "MANUAL2",
    /** Timing was done with three manual times per lane.  */
    MANUAL3 = "MANUAL3",
}

/**
 * This element describes one single record list.
 */
export interface Recordlist {
    /**
     * For agegroup records. Agegroup is "Open", if the element is missing. 
     */
    agegroup?:    RecordAgeGroup;
    /**
     * The course for the record list.
     */
    course:       Course;
    /** UNDOCUMENTED */
    formeet?:      "yes";
    /**
     * The gender for records in this list. Acceptable values are male (M), 
     * female (F) and mixed (X). Mixed is only used for relays.
     */
    gender:       Gender;
    /**
     * The handicap class for the record list. Allowed values are: 
     * 1 - 15, 20, 34, 49 standard handicap classes. 
     */
    handicap?:     string;
    /**
     * The name of the record list (e.g. "World Records").
     */
    name:         string;
    /**
     * For international records, this field is empty. For national or regional 
     * records, the field should contain the FINA three letter code of the 
     * national federation.
     */
    nation?:      Nation;
    /**
     * This value can be used to define an order for all recordlists within a 
     * collection. 
     */
    order?:        number;
    /** UNDOCUMENTED */
    recordlistid?: string|number;
    /**
     * The records of this record list.
     */
    records:      Record[];
    /**
     * For international and national records, this field is empty. For regional 
     * records, the field should contain the official code for the region. If 
     * region has a value, nation needs to have a value as well. 
     */
    region?:         string;
    /**
     * The record type.
     * This list of types maybe extended by federations. In this case, values 
     * should have the nation code and a dot as prefix (e.g. SUI.RZW for 
     * records of a region in Switzerland). 
     */
    type?:         RecordlistType | Nation | string;
    /**
     * The date of the last change to the record list. 
     */
    updated?:      DateOnly;
}

/**
 * This element describes one individual or relay record. It is possible 
 * to have no ATHLETE / RELAY objects. In 
 * this case the record is a "record standard time". 
 */
export interface Record {
    /**
     * The person who holds the record. This is only used for individual 
     * records. 
     */
    athlete?:  RecordAthlete;
    /**
     * This value can be used for additional comments like "Swum in the 
     * prelims" or things like that
     */
    comment?:  string;
    /**
     * Information about the meet, where the record was swum. 
     */
    meetinfo?:  RecordMeetInfo;
    /**
     * The relay team and swimmers, who holds the record. This is only 
     * used for relay records. 
     */
    relay?:    RecordRelay;
    /**
     * The split times of the record. 
     */
    splits?:   Split[];
    /**
     * The swimstyle contains information like distance, stroke of the record. 
     */
    swimstyle: Swimstyle; // todo
    /**
     * The final time of the record in the swim time format. 
     */
    swimtime:  SwimTime;
    /**
     * Can be used to add comment about the record, e.g. "Ratification 
     * pending by FINA"
     */
    status?: string;
}

export enum RecordlistType {
    /** World records. */
    WR = "WR",
    /** Olympic records. */
    OR = "OR",
    /** European records. */
    ER = "ER",
    /** Pan American records. */
    PAR = "PAR",
    /** African records. */
    AFR = "AFR",
    /** Asian records. */
    AR = "AR",
    /** Oceanian records. */
    OCR = "OCR",
    /** Commonwealth records. */
    CWR = "CWR",
}
/**
 * This element describes one single time standard list.
 */
export interface TimeStandardList {
    /**
     * For age group time standards. Agegroup is "Open", if the element is missing.
     */
    agegroup?:          RecordAgeGroup;
    /** UNDOCUMENTED */
    code?:              string;
    /**
     * The course for the timestandard list. See section 5.4. for acceptable 
     * values. 
     */
    course:             Course;
    /**
     * The gender for time standards in this list. Acceptable values are male 
     * (M), female (F) and mixed (X). Mixed is only used for relays.
     */
    gender:             Gender;
    /**
     * The handicap class for the timestandard list. Allowed values are: 
     * * 1 - 15, 20, 34, 49 standard handicap classes. 
     */
    handicap?:           string;
    /**
     * The name of the time standard list (e.g. "Olympic A Time Standards").
     */
    name?:              string;
    /**
     * The unique id of the time standard list. 
     */
    timestandardlistid: number;
    /**
     * The time standards or qualification times of this list. 
     */
    timestandards:      Timestandard[];
    /**
     * There can be different type of time standards. Default value is MAXIMUM.
     */
    type?:              TimeStandardListType;
}

/**
 * This element describes one time standard.
 */
export interface Timestandard {
    /**
     * The style contains information like distance, stroke of the record. For 
     * each TIMESTANDARD in the same collection, the SWIMSTYLE 
     * should be unique. 
     */
    swimstyle: Swimstyle;
    /**
     * The time standard or qualification time. 
     */
    swimtime:  SwimTime;
}

export enum TimeStandardListType {
    DEFAULT = "DEFAULT",
    LEVEL = "LEVEL",
    MAXIMUM = "MAXIMUM",
    MINIMUM = "MINIMUM",
}

export enum Country {
    AD = "AD",
    AE = "AE",
    AF = "AF",
    AG = "AG",
    AI = "AI",
    AL = "AL",
    AM = "AM",
    AN = "AN",
    AO = "AO",
    AR = "AR",
    AS = "AS",
    AT = "AT",
    AU = "AU",
    AW = "AW",
    AZ = "AZ",
    BA = "BA",
    BB = "BB",
    BD = "BD",
    BE = "BE",
    BF = "BF",
    BG = "BG",
    BH = "BH",
    BI = "BI",
    BJ = "BJ",
    BM = "BM",
    BN = "BN",
    BO = "BO",
    BR = "BR",
    BS = "BS",
    BT = "BT",
    BW = "BW",
    BY = "BY",
    BZ = "BZ",
    CA = "CA",
    CC = "CC",
    CD = "CD",
    CF = "CF",
    CG = "CG",
    CH = "CH",
    CI = "CI",
    CK = "CK",
    CL = "CL",
    CM = "CM",
    CN = "CN",
    CO = "CO",
    CR = "CR",
    CS = "CS",
    CU = "CU",
    CV = "CV",
    CX = "CX",
    CY = "CY",
    CZ = "CZ",
    DE = "DE",
    DJ = "DJ",
    DK = "DK",
    DM = "DM",
    DO = "DO",
    DZ = "DZ",
    EC = "EC",
    EE = "EE",
    EG = "EG",
    ER = "ER",
    ES = "ES",
    ET = "ET",
    FI = "FI",
    FJ = "FJ",
    FK = "FK",
    FO = "FO",
    FR = "FR",
    GA = "GA",
    GB = "GB",
    GD = "GD",
    GE = "GE",
    GF = "GF",
    GH = "GH",
    GI = "GI",
    GL = "GL",
    GM = "GM",
    GN = "GN",
    GP = "GP",
    GQ = "GQ",
    GR = "GR",
    GS = "GS",
    GT = "GT",
    GU = "GU",
    GW = "GW",
    GY = "GY",
    HK = "HK",
    HN = "HN",
    HR = "HR",
    HT = "HT",
    HU = "HU",
    ID = "ID",
    IE = "IE",
    IL = "IL",
    IN = "IN",
    IQ = "IQ",
    IR = "IR",
    IS = "IS",
    IT = "IT",
    JM = "JM",
    JO = "JO",
    JP = "JP",
    KE = "KE",
    KG = "KG",
    KH = "KH",
    KI = "KI",
    KM = "KM",
    KN = "KN",
    KP = "KP",
    KR = "KR",
    KW = "KW",
    KY = "KY",
    KZ = "KZ",
    LA = "LA",
    LB = "LB",
    LC = "LC",
    LI = "LI",
    LK = "LK",
    LR = "LR",
    LS = "LS",
    LT = "LT",
    LU = "LU",
    LV = "LV",
    LY = "LY",
    MA = "MA",
    MC = "MC",
    MD = "MD",
    MG = "MG",
    MH = "MH",
    MK = "MK",
    ML = "ML",
    MM = "MM",
    MN = "MN",
    MO = "MO",
    MP = "MP",
    MQ = "MQ",
    MR = "MR",
    MS = "MS",
    MT = "MT",
    MU = "MU",
    MV = "MV",
    MW = "MW",
    MX = "MX",
    MY = "MY",
    MZ = "MZ",
    NA = "NA",
    NC = "NC",
    NE = "NE",
    NF = "NF",
    NG = "NG",
    NI = "NI",
    NL = "NL",
    NO = "NO",
    NP = "NP",
    NR = "NR",
    NZ = "NZ",
    OM = "OM",
    PA = "PA",
    PE = "PE",
    PF = "PF",
    PG = "PG",
    PH = "PH",
    PK = "PK",
    PL = "PL",
    PM = "PM",
    PN = "PN",
    PR = "PR",
    PT = "PT",
    PW = "PW",
    PY = "PY",
    QA = "QA",
    RE = "RE",
    RO = "RO",
    RU = "RU",
    RW = "RW",
    SA = "SA",
    SB = "SB",
    SC = "SC",
    SD = "SD",
    SE = "SE",
    SG = "SG",
    SH = "SH",
    SI = "SI",
    SK = "SK",
    SL = "SL",
    SM = "SM",
    SN = "SN",
    SO = "SO",
    SR = "SR",
    ST = "ST",
    SV = "SV",
    SY = "SY",
    SZ = "SZ",
    TC = "TC",
    TD = "TD",
    TF = "TF",
    TG = "TG",
    TH = "TH",
    TJ = "TJ",
    TK = "TK",
    TM = "TM",
    TN = "TN",
    TO = "TO",
    TP = "TP",
    TR = "TR",
    TT = "TT",
    TV = "TV",
    TW = "TW",
    TZ = "TZ",
    UA = "UA",
    UG = "UG",
    UM = "UM",
    US = "US",
    UY = "UY",
    UZ = "UZ",
    VA = "VA",
    VC = "VC",
    VE = "VE",
    VG = "VG",
    VI = "VI",
    VN = "VN",
    VU = "VU",
    WF = "WF",
    WS = "WS",
    XZ = "XZ",
    YE = "YE",
    YT = "YT",
    ZA = "ZA",
    ZM = "ZM",
    ZW = "ZW",
}

/**
 * For  the  nation  codes,  the  three  letter  codes  of  FINA  are  used.  The  current  table  with  all  codes  and  nation 
 * names can be downloaded from http://www.swimrankings.net/files/Lenex_Nation.txt 
 */
export enum Nation {
    AFG = "AFG",
    ALB = "ALB",
    ALG = "ALG",
    ASA = "ASA",
    AND = "AND",
    ANG = "ANG",
    ANT = "ANT",
    ARG = "ARG",
    ARM = "ARM",
    ARU = "ARU",
    AUS = "AUS",
    AUT = "AUT",
    AZE = "AZE",
    BAH = "BAH",
    BRN = "BRN",
    BAN = "BAN",
    BAR = "BAR",
    BLR = "BLR",
    BEL = "BEL",
    BIZ = "BIZ",
    BEN = "BEN",
    BER = "BER",
    BHU = "BHU",
    BOL = "BOL",
    BIH = "BIH",
    BOT = "BOT",
    BRA = "BRA",
    IVB = "IVB",
    BRU = "BRU",
    BUL = "BUL",
    BUR = "BUR",
    BDI = "BDI",
    CAM = "CAM",
    CMR = "CMR",
    CAN = "CAN",
    CPV = "CPV",
    CAY = "CAY",
    CAF = "CAF",
    CHA = "CHA",
    CHI = "CHI",
    CHN = "CHN",
    TPE = "TPE",
    COL = "COL",
    COM = "COM",
    CGO = "CGO",
    COK = "COK",
    CRC = "CRC",
    CRO = "CRO",
    CUB = "CUB",
    CYP = "CYP",
    CZE = "CZE",
    PRK = "PRK",
    COD = "COD",
    DEN = "DEN",
    DJI = "DJI",
    DMA = "DMA",
    DOM = "DOM",
    ECU = "ECU",
    EGY = "EGY",
    ESA = "ESA",
    GEQ = "GEQ",
    ERI = "ERI",
    EST = "EST",
    ETH = "ETH",
    FAR = "FAR",
    FIJ = "FIJ",
    FIN = "FIN",
    MKD = "MKD",
    FRA = "FRA",
    GAB = "GAB",
    GAM = "GAM",
    GEO = "GEO",
    GER = "GER",
    GHA = "GHA",
    GIB = "GIB",
    GBR = "GBR",
    GRE = "GRE",
    GRN = "GRN",
    GUM = "GUM",
    GUA = "GUA",
    GUI = "GUI",
    GBS = "GBS",
    GUY = "GUY",
    HAI = "HAI",
    HON = "HON",
    HKG = "HKG",
    HUN = "HUN",
    IRI = "IRI",
    ISL = "ISL",
    IND = "IND",
    INA = "INA",
    IRQ = "IRQ",
    IRL = "IRL",
    ISR = "ISR",
    ITA = "ITA",
    CIV = "CIV",
    JAM = "JAM",
    JPN = "JPN",
    JOR = "JOR",
    KAZ = "KAZ",
    KEN = "KEN",
    KIR = "KIR",
    KOR = "KOR",
    KUW = "KUW",
    KGZ = "KGZ",
    LAO = "LAO",
    LAT = "LAT",
    LBN = "LBN",
    LES = "LES",
    LBR = "LBR",
    LBA = "LBA",
    LIE = "LIE",
    LTU = "LTU",
    LUX = "LUX",
    MAC = "MAC",
    MAD = "MAD",
    MAW = "MAW",
    MAS = "MAS",
    MDV = "MDV",
    MLI = "MLI",
    MLT = "MLT",
    MHL = "MHL",
    MTN = "MTN",
    MRI = "MRI",
    MEX = "MEX",
    FSM = "FSM",
    MDA = "MDA",
    MON = "MON",
    MNE = "MNE",
    MGL = "MGL",
    MAR = "MAR",
    MOZ = "MOZ",
    MYA = "MYA",
    NAM = "NAM",
    NRU = "NRU",
    NEP = "NEP",
    NED = "NED",
    AHO = "AHO",
    NZL = "NZL",
    NCA = "NCA",
    NIG = "NIG",
    NGR = "NGR",
    NMA = "NMA",
    NOR = "NOR",
    OMA = "OMA",
    PAK = "PAK",
    PLW = "PLW",
    PLE = "PLE",
    PAN = "PAN",
    PNG = "PNG",
    PAR = "PAR",
    PER = "PER",
    PHI = "PHI",
    POL = "POL",
    POR = "POR",
    PUR = "PUR",
    QAT = "QAT",
    ROU = "ROU",
    RUS = "RUS",
    RWA = "RWA",
    STP = "STP",
    LCA = "LCA",
    SAM = "SAM",
    SMR = "SMR",
    KSA = "KSA",
    SEN = "SEN",
    SRB = "SRB",
    SEY = "SEY",
    SLE = "SLE",
    SGP = "SGP",
    SVK = "SVK",
    SLO = "SLO",
    SOL = "SOL",
    SOM = "SOM",
    RSA = "RSA",
    ESP = "ESP",
    SRI = "SRI",
    SKN = "SKN",
    VIN = "VIN",
    SUD = "SUD",
    SUR = "SUR",
    SWZ = "SWZ",
    SWE = "SWE",
    SUI = "SUI",
    SYR = "SYR",
    TAH = "TAH",
    TJK = "TJK",
    TAN = "TAN",
    THA = "THA",
    TLS = "TLS",
    TOG = "TOG",
    TGA = "TGA",
    TRI = "TRI",
    TUN = "TUN",
    TUR = "TUR",
    TKM = "TKM",
    TUV = "TUV",
    UGA = "UGA",
    UKR = "UKR",
    UAE = "UAE",
    USA = "USA",
    URU = "URU",
    UZB = "UZB",
    VAN = "VAN",
    VEN = "VEN",
    VIE = "VIE",
    ISV = "ISV",
    YEM = "YEM",
    ZAM = "ZAM",
    ZIM = "ZIM",
}
