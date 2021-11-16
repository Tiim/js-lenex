// Auto generated code, update with npm run update-typings
// Last update 2021-11-16

export interface LenexRaw {
    constructor:        Constructor;
    meets?:             Meet[];
    recordlists?:       Recordlist[];
    timestandardlists?: Timestandardlist[];
    version:            string;
}

export interface Constructor {
    contact:       ConstructorContact;
    name:          ConstructorName;
    registration?: string;
    version:       string;
}

export interface ConstructorContact {
    city?:     string;
    country?:  Country;
    email?:    string;
    fax?:      string;
    internet?: string;
    mobile?:   string;
    name?:     string;
    phone?:    string;
    state?:    string;
    street?:   string;
    street2?:  string;
    zip?:      string;
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
    SPLASHTeamManager10 = "SPLASH Team Manager 10",
    SwimrankingsNet = "swimrankings.net",
}

export interface Meet {
    agedate:            Agedate;
    city:               string;
    clubs?:             ClubElement[];
    contact?:           ConstructorContact;
    course:             Course;
    deadline?:          Date;
    entrystartdate?:    Date;
    entrytype?:         string;
    facility?:          Facility;
    fees?:              FeeElement[];
    hostclub?:          string;
    "hostclub.url"?:    string;
    maxentriesathlete?: string;
    name:               string;
    "name.en"?:         string;
    nation:             Nation;
    number?:            string;
    organizer?:         string;
    "organizer.url"?:   string;
    pointtable?:        Pointtable;
    pool:               Pool;
    qualify?:           Qualify;
    reservecount?:      string;
    "result.url"?:      string;
    sessions:           Session[];
    startmethod?:       string;
    state?:             string;
    timing?:            Timing;
    type?:              string;
    withdrawuntil?:     Date;
}

export interface Agedate {
    type:  AgedateType;
    value: Date;
}

export enum AgedateType {
    CanFnq = "CAN.FNQ",
    Date = "DATE",
    Por = "POR",
    Year = "YEAR",
}

export interface ClubElement {
    athletes?:       AthleteElement[];
    clubid?:         string;
    coaches?:        Coaches;
    code?:           string;
    contact?:        ConstructorContact;
    name:            string;
    "name.en"?:      string;
    nation?:         Nation;
    officials?:      Official[];
    region?:         Region;
    relays?:         RelayElement[];
    shortname?:      string;
    "shortname.en"?: string;
    swrid?:          string;
    type?:           ClubType;
}

export interface AthleteElement {
    athleteid:   string;
    birthdate?:  Date;
    entries?:    AthleteEntries;
    externalid?: string;
    firstname?:  string;
    gender:      Gender;
    handicap?:   Handicap;
    lastname?:   string;
    level?:      string;
    license?:    string;
    nation?:     Nation;
    results?:    Result[];
    swrid?:      string;
}

export interface AthleteEntries {
    entry: PurpleEntry[] | FluffyEntry;
}

export interface PurpleEntry {
    entrytime: string;
    eventid:   string;
    heatid?:   string;
    lane?:     string;
    meetinfo?: Meetinfo;
    status?:   EntryStatus;
}

export interface Meetinfo {
    city?:       string;
    course?:     Course;
    date?:       Date;
    meetinfoid?: string;
    name?:       string;
    nation?:     Nation;
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
    heatid?:         string;
    lane?:           string;
    relaypositions?: EntryRelayposition[];
}

export interface EntryRelayposition {
    athleteid: string;
    meetinfo?: Meetinfo;
    number:    string;
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
    comment?:        string;
    entrycourse?:    Course;
    entrytime?:      string;
    eventid:         string;
    heatid?:         string;
    lane?:           string;
    late?:           Formeet;
    points?:         string;
    reactiontime?:   string;
    relaypositions?: ResultRelayposition[];
    resultid:        string;
    splits?:         Split[];
    status?:         EntryStatus;
    swimtime:        string;
}

export enum Formeet {
    Yes = "yes",
}

export interface ResultRelayposition {
    athleteid?:    string;
    number:        string;
    reactiontime?: string;
    status?:       EntryStatus;
}

export interface Split {
    distance: string;
    swimtime: string;
}

export interface Coaches {
    coach: CoachElement[] | CoachElement;
}

export interface CoachElement {
    coachid?:  string;
    contact?:  CoachContact;
    firstname: string;
    gender:    Gender;
    lastname:  string;
    license?:  string;
    nation?:   Nation;
    type?:     CoachType;
}

export interface CoachContact {
    city:    string;
    email:   string;
    mobile?: string;
    phone?:  string;
    state:   string;
    street:  string;
    zip:     string;
}

export enum CoachType {
    Headcoach = "HEADCOACH",
}

export interface Official {
    firstname:  string;
    gender:     Gender;
    grade:      string;
    lastname:   string;
    license?:   string;
    nation?:    Nation;
    officialid: string;
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
    entries?:    RelayEntries;
    gender:      Gender;
    name?:       string;
    number?:     string;
    relayid?:    string;
    results?:    Result[];
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
    state?:  string;
    street?: string;
    zip?:    string;
}

export interface FeeElement {
    currency: Currency;
    type:     FeeType;
    value:    string;
}

export enum Currency {
    Chf = "CHF",
    Eur = "EUR",
}

export enum FeeType {
    Athlete = "ATHLETE",
    LateentryIndividual = "LATEENTRY.INDIVIDUAL",
    LateentryRelay = "LATEENTRY.RELAY",
    Relay = "RELAY",
}

export interface Pointtable {
    name:         PointtableName;
    pointtableid: string;
    version:      string;
}

export enum PointtableName {
    DSVMasterPerformanceTable = "DSV Master Performance Table",
    FINAPointScoring = "FINA Point Scoring",
    KNZBNEDWPSRankings = "KNZB NED WPS Rankings",
}

export interface Pool {
    lanemax?: string;
    lanemin?: string;
    name?:    string;
}

export interface Qualify {
    conversion?: string;
    from?:       Date;
    percent?:    string;
    until?:      Date;
}

export interface Session {
    date:               Date;
    daytime?:           string;
    endtime?:           string;
    events:             Event[];
    judges?:            Judge[];
    maxentriesathlete?: string;
    name?:              string;
    number:             string;
    officialmeeting?:   string;
    remarksjudge?:      string;
    teamleadermeeting?: string;
    warmupfrom?:        string;
    warmupuntil?:       string;
}

export interface Event {
    agegroups?:        AgegroupElement[];
    daytime?:          string;
    eventid:           string;
    fee?:              EventFee;
    gender?:           Gender;
    heats?:            Heat[];
    number:            string;
    order?:            string;
    preveventid:       string;
    round?:            Round;
    swimstyle:         EventSwimstyle;
    timestandardrefs?: Timestandardref[];
    type?:             AgegroupType;
}

export interface AgegroupElement {
    agegroupid: string;
    agemax:     string;
    agemin:     string;
    calculate?: string;
    gender?:    Gender;
    name?:      string;
    rankings?:  Ranking[];
    type?:      AgegroupType;
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
    daytime?: string;
    heatid:   string;
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
    code?:        string;
    distance:     string;
    name?:        string;
    relaycount:   string;
    stroke:       Stroke;
    swimstyleid?: string;
    technique?:   string;
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
    fee:                EventFee;
    marker:             Marker;
    timestandardlistid: string;
}

export enum Marker {
    Empty = "*",
}

export interface Judge {
    number?:    string;
    officialid: string;
    role:       Role;
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
    agegroup:     RecordlistAgegroup;
    course:       Course;
    formeet:      Formeet;
    gender:       Gender;
    name:         RecordlistName;
    order:        string;
    recordlistid: string;
    records:      Record[];
    type:         RecordlistType;
    updated:      Date;
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
    athlete?:  RecordAthlete;
    meetinfo:  Meetinfo;
    relay?:    RecordRelay;
    splits?:   Split[];
    swimstyle: RecordSwimstyle;
    swimtime:  string;
}

export interface RecordAthlete {
    athleteid: string;
    birthdate: Date;
    club?:     AthleteClub;
    firstname: string;
    gender:    Gender;
    lastname:  string;
    nation:    Nation;
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
    athlete: RecordAthlete;
    number:  string;
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
    agegroup?:          TimestandardlistAgegroup;
    code?:              Code;
    course:             Course;
    gender:             Gender;
    name?:              TimestandardlistName;
    timestandardlistid: string;
    timestandards:      Timestandard[];
    type:               TimestandardlistType;
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
    swimstyle: RecordSwimstyle;
    swimtime:  string;
}

export enum TimestandardlistType {
    Default = "DEFAULT",
    Level = "LEVEL",
    Maximum = "MAXIMUM",
    Minimum = "MINIMUM",
}
