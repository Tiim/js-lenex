// Auto generated code, update with npm run update-typings
// Last update 2021-11-16
export interface LenexRaw {
    version:            string;
    constructor:        Constructor;
    meets?:             Meet[];
    timestandardlists?: Timestandardlist[];
    recordlists?:       Recordlist[];
}

export interface Constructor {
    name:          ConstructorName;
    registration?: string;
    version:       string;
    contact:       Contact;
}

export interface Contact {
    name?:     string;
    street?:   string;
    city?:     string;
    zip?:      string;
    country?:  Country;
    email?:    string;
    internet?: string;
    phone?:    string;
    fax?:      string;
    state?:    string;
    street2?:  string;
}

export enum Country {
    Ch = "CH",
    De = "DE",
    Fr = "FR",
    It = "IT",
    Pl = "PL",
}

export enum ConstructorName {
    SPLASHMeetManager11 = "SPLASH Meet Manager 11",
    SPLASHMeetManager2007 = "SPLASH Meet Manager 2007",
    SwimrankingsNet = "swimrankings.net",
}

export interface Meet {
    city:               string;
    name:               string;
    course:             Course;
    deadline?:          Date;
    entrystartdate?:    Date;
    entrytype?:         string;
    hostclub?:          string;
    "hostclub.url"?:    string;
    organizer?:         string;
    "organizer.url"?:   string;
    "result.url"?:      string;
    startmethod?:       string;
    timing:             Timing;
    type?:              string;
    withdrawuntil?:     Date;
    nation:             Nation;
    maxentriesathlete?: string;
    agedate:            Agedate;
    pool:               Pool;
    facility?:          Facility;
    pointtable?:        Pointtable;
    contact?:           Contact;
    fees?:              FeeElement[];
    qualify?:           Qualify;
    sessions:           Session[];
    clubs?:             ClubElement[];
    reservecount?:      string;
    number?:            string;
    state?:             string;
    "name.en"?:         string;
}

export interface Agedate {
    value: Date;
    type:  AgedateType;
}

export enum AgedateType {
    CanFnq = "CAN.FNQ",
    Date = "DATE",
    Por = "POR",
    Year = "YEAR",
}

export interface ClubElement {
    type:            ClubType;
    code?:           string;
    nation?:         Nation;
    region?:         Region;
    clubid?:         string;
    swrid?:          string;
    name:            string;
    shortname?:      string;
    athletes?:       AthleteElement[];
    relays?:         RelayElement[];
    coaches?:        Coaches;
    "name.en"?:      string;
    "shortname.en"?: string;
    officials?:      Official[];
    contact?:        Contact;
}

export interface AthleteElement {
    firstname?:  string;
    lastname?:   string;
    birthdate?:  Date;
    gender:      Gender;
    nation:      Nation;
    license?:    string;
    swrid?:      string;
    athleteid:   string;
    results?:    Result[];
    entries?:    AthleteEntries;
    externalid?: string;
    handicap?:   Handicap;
    level?:      string;
}

export interface AthleteEntries {
    entry: PurpleEntry[] | FluffyEntry;
}

export interface PurpleEntry {
    entrytime: string;
    eventid:   string;
    lane?:     string;
    heatid?:   string;
    meetinfo?: Meetinfo;
    status?:   EntryStatus;
}

export interface Meetinfo {
    course?:     Course;
    city?:       string;
    date?:       Date;
    name?:       string;
    nation?:     Nation;
    meetinfoid?: string;
}

export enum Course {
    Lcm = "LCM",
    SCM = "SCM",
}

export enum Nation {
    Aus = "AUS",
    Aut = "AUT",
    Bel = "BEL",
    Bih = "BIH",
    Bra = "BRA",
    Bul = "BUL",
    Can = "CAN",
    Chn = "CHN",
    Cro = "CRO",
    Den = "DEN",
    Esp = "ESP",
    Fra = "FRA",
    Gbr = "GBR",
    Ger = "GER",
    Gre = "GRE",
    Hun = "HUN",
    Ina = "INA",
    Ind = "IND",
    Irl = "IRL",
    Ita = "ITA",
    Jpn = "JPN",
    LBA = "LBA",
    Lie = "LIE",
    Lux = "LUX",
    Ned = "NED",
    Nzl = "NZL",
    Phi = "PHI",
    Pol = "POL",
    Por = "POR",
    RSA = "RSA",
    Rou = "ROU",
    Rus = "RUS",
    Srb = "SRB",
    Sui = "SUI",
    Svk = "SVK",
    Swe = "SWE",
    Tur = "TUR",
    Ukr = "UKR",
    Usa = "USA",
}

export enum EntryStatus {
    DNS = "DNS",
    Dnf = "DNF",
    Dsq = "DSQ",
    Exh = "EXH",
    Sick = "SICK",
    SuiRed10 = "SUI.RED10",
    Wdr = "WDR",
}

export interface FluffyEntry {
    entrytime:       string;
    eventid:         string;
    lane:            string;
    heatid:          string;
    relaypositions?: EntryRelayposition[];
}

export interface EntryRelayposition {
    athleteid: string;
    number:    string;
    meetinfo?: Meetinfo;
}

export enum Gender {
    F = "F",
    M = "M",
    X = "X",
}

export interface Handicap {
    breast?: string;
    free:    string;
    medley?: string;
}

export interface Result {
    eventid:         string;
    swimtime:        string;
    resultid:        string;
    entrytime?:      string;
    entrycourse?:    Course;
    points?:         string;
    heatid?:         string;
    lane?:           string;
    status?:         EntryStatus;
    splits?:         Split[];
    comment?:        string;
    late?:           Formeet;
    reactiontime?:   string;
    relaypositions?: ResultRelayposition[];
}

export enum Formeet {
    Yes = "yes",
}

export interface ResultRelayposition {
    athleteid?:    string;
    number:        string;
    status?:       EntryStatus;
    reactiontime?: string;
}

export interface Split {
    distance: string;
    swimtime: string;
}

export interface Coaches {
    coach: CoachElement[] | CoachElement;
}

export interface CoachElement {
    firstname: string;
    gender:    Gender;
    lastname:  string;
    license?:  string;
    type?:     CoachType;
    nation?:   Nation;
}

export enum CoachType {
    Headcoach = "HEADCOACH",
}

export interface Official {
    officialid: string;
    firstname:  string;
    gender:     Gender;
    grade:      string;
    lastname:   string;
    nation?:    Nation;
    license?:   string;
}

export enum Region {
    Ancnp = "ANCNP",
    Anmin = "ANMIN",
    Prova = "PROVA",
    Provb = "PROVB",
    Provl = "PROVL",
    RSI = "RSI",
    Ros = "ROS",
    Rsr = "RSR",
    Rzo = "RZO",
    Rzw = "RZW",
}

export interface RelayElement {
    agemax:      string;
    agemin:      string;
    agetotalmax: string;
    agetotalmin: string;
    gender:      Gender;
    number?:     string;
    results?:    Result[];
    name?:       string;
    entries?:    RelayEntries;
}

export interface RelayEntries {
    entry: FluffyEntry[] | FluffyEntry;
}

export enum ClubType {
    Club = "CLUB",
    Unattached = "UNATTACHED",
}

export interface Facility {
    city:    string;
    name?:   string;
    nation:  Nation;
    street?: string;
    zip?:    string;
    state?:  string;
}

export interface FeeElement {
    currency: Currency;
    type:     string;
    value:    string;
}

export enum Currency {
    Chf = "CHF",
    Eur = "EUR",
}

export interface Pointtable {
    pointtableid: string;
    name:         PointtableName;
    version:      string;
}

export enum PointtableName {
    DSVMasterPerformanceTable = "DSV Master Performance Table",
    FINAPointScoring = "FINA Point Scoring",
    KNZBNEDWPSRankings = "KNZB NED WPS Rankings",
}

export interface Pool {
    name?:    string;
    lanemin?: string;
    lanemax:  string;
}

export interface Qualify {
    until?:      Date;
    from?:       Date;
    conversion?: string;
    percent?:    string;
}

export interface Session {
    date:               Date;
    daytime?:           string;
    name?:              string;
    number:             string;
    officialmeeting?:   string;
    teamleadermeeting?: string;
    warmupfrom?:        string;
    warmupuntil?:       string;
    remarksjudge?:      string;
    maxentriesathlete?: string;
    events:             Event[];
    endtime?:           string;
    judges?:            Judge[];
}

export interface Event {
    eventid:           string;
    daytime?:          string;
    gender?:           Gender;
    number:            string;
    order?:            string;
    round:             Round;
    preveventid:       string;
    swimstyle:         EventSwimstyle;
    fee?:              EventFee;
    agegroups?:        AgegroupElement[];
    heats?:            Heat[];
    type?:             AgegroupType;
    timestandardrefs?: Timestandardref[];
}

export interface AgegroupElement {
    agegroupid: string;
    agemax:     string;
    agemin:     string;
    rankings?:  Ranking[];
    gender?:    Gender;
    name?:      string;
    type?:      AgegroupType;
    calculate?: string;
}

export interface Ranking {
    order:    string;
    place:    string;
    resultid: string;
}

export enum AgegroupType {
    Masters = "MASTERS",
}

export interface EventFee {
    currency: Currency;
    value:    string;
}

export interface Heat {
    heatid:   string;
    daytime?: string;
    number:   string;
    order?:   string;
    status?:  HeatStatus;
}

export enum HeatStatus {
    Official = "OFFICIAL",
    Seeded = "SEEDED",
}

export enum Round {
    Tim = "TIM",
}

export interface EventSwimstyle {
    distance:     string;
    relaycount:   string;
    stroke:       Stroke;
    technique?:   string;
    swimstyleid?: string;
    name?:        string;
    code?:        string;
}

export enum Stroke {
    Back = "BACK",
    Breast = "BREAST",
    Fly = "FLY",
    Free = "FREE",
    Medley = "MEDLEY",
    Unknown = "UNKNOWN",
}

export interface Timestandardref {
    marker:             Marker;
    timestandardlistid: string;
    fee:                EventFee;
}

export enum Marker {
    Empty = "*",
}

export interface Judge {
    officialid: string;
    role:       Role;
    number?:    string;
}

export enum Role {
    Cbo = "CBO",
    Ref = "REF",
    Sta = "STA",
    Tdg = "TDG",
    Tik = "TIK",
}

export enum Timing {
    Automatic = "AUTOMATIC",
    Manual1 = "MANUAL1",
    Manual3 = "MANUAL3",
}

export interface Recordlist {
    recordlistid: string;
    course:       Course;
    gender:       Gender;
    name:         RecordlistName;
    order:        string;
    type:         RecordlistType;
    updated:      Date;
    formeet:      Formeet;
    agegroup:     RecordlistAgegroup;
    records:      Record[];
}

export interface RecordlistAgegroup {
    agemax:     string;
    agemin:     string;
    calculate?: string;
}

export enum RecordlistName {
    SwissJuniorChampionshipRecords = "Swiss Junior Championship Records",
}

export interface Record {
    swimtime:  string;
    swimstyle: RecordSwimstyle;
    meetinfo:  Meetinfo;
    athlete?:  RecordAthlete;
    splits?:   Split[];
    relay?:    RecordRelay;
}

export interface RecordAthlete {
    athleteid: string;
    birthdate: Date;
    firstname: string;
    gender:    Gender;
    lastname:  string;
    nation:    Nation;
    club?:     AthleteClub;
}

export interface AthleteClub {
    clubid: string;
    code:   string;
    name:   string;
    nation: Nation;
    region: Region;
}

export interface RecordRelay {
    club:           AthleteClub;
    relaypositions: RelayRelayposition[];
}

export interface RelayRelayposition {
    number:  string;
    athlete: RecordAthlete;
}

export interface RecordSwimstyle {
    distance:   string;
    relaycount: string;
    stroke:     Stroke;
}

export enum RecordlistType {
    SuiJcr = "SUI.JCR",
}

export interface Timestandardlist {
    timestandardlistid: string;
    code?:              Code;
    course:             Course;
    gender:             Gender;
    name?:              TimestandardlistName;
    type:               TimestandardlistType;
    agegroup?:          TimestandardlistAgegroup;
    timestandards:      Timestandard[];
}

export interface TimestandardlistAgegroup {
    agemax: string;
    agemin: string;
}

export enum Code {
    H = "H",
    LV = "LV",
    Lt = "LT",
    NS = "NS",
}

export enum TimestandardlistName {
    Fricktalcup2013Nachmittag = "Fricktalcup 2013 Nachmittag",
    Fricktalcup2013Vormittag = "Fricktalcup 2013 Vormittag",
    Haai2021 = "Haai 2021",
    Loodsvisjes2021 = "loodsvisjes 2021",
    NiveauNachwuchsSM2011 = "Niveau Nachwuchs-SM 2011",
}

export interface Timestandard {
    swimtime:  string;
    swimstyle: RecordSwimstyle;
}

export enum TimestandardlistType {
    Default = "DEFAULT",
    Level = "LEVEL",
    Maximum = "MAXIMUM",
    Minimum = "MINIMUM",
}
