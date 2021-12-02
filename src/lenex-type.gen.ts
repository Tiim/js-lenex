// Auto generated code, update with npm run update-typings
// Last update 2021-11-17

export interface LenexRaw {
    constructor:        Constructor;
    meets?:             Meet[];
    recordlists?:       Recordlist[];
    timestandardlists?: Timestandardlist[];
    version:            number;
}

export interface Constructor {
    contact:       ConstructorContact;
    name:          ConstructorName;
    registration?: string;
    version:       number | string;
}

export interface ConstructorContact {
    city?:    City;
    country?: Country;
    email:    Email;
    fax?:     string;
    internet: string;
    name:     ContactName;
    phone?:   string;
    street?:  Street;
    zip?:     number;
}

export enum City {
    Bern = "Bern",
    SpiegelBBern = "Spiegel b. Bern",
}

export enum Country {
    Ch = "CH",
}

export enum Email {
    InfoEasywkDe = "info@easywk.de",
    InfoSplashSoftwareCh = "info@splash-software.ch",
    SalesSwimrankingsNet = "sales@swimrankings.net",
    SwimresultsGeologixCh = "swimresults@geologix.ch",
}

export enum ContactName {
    BjoernStickan = "Bjoern Stickan",
    GeoLogixAG = "GeoLogix AG",
    GeologixAG = "geologix AG",
    SplashSoftwareGmbH = "Splash Software GmbH",
}

export enum Street {
    Ahornweg41 = "Ahornweg 41",
    Muristrasse60 = "Muristrasse 60",
    Weltpoststrasse5 = "Weltpoststrasse 5",
}

export enum ConstructorName {
    EasyWk = "EasyWk",
    SPLASHMeetManager11 = "SPLASH Meet Manager 11",
    SPLASHMeetManager2007 = "SPLASH Meet Manager 2007",
    SPLASHTeamManager10 = "SPLASH Team Manager 10",
    SwimrankingsNet = "swimrankings.net",
}

export interface Meet {
    agedate:            Agedate;
    city:               string;
    "city.en"?:         string;
    clubs?:             ClubElement[];
    contact?:           MeetContact;
    course:             Course;
    deadline?:          Date;
    deadlinetime?:      string;
    "easy.additional"?: EasyAdditional;
    entrystartdate?:    Date;
    entrytype?:         string;
    facility?:          Facility;
    fees?:              FeeElement[];
    hostclub?:          string;
    "hostclub.url"?:    string;
    maxentriesathlete?: number;
    maxentriesrelay?:   number;
    name:               string;
    "name.en"?:         string;
    nation:             Nation;
    number?:            number | string;
    organizer?:         string;
    "organizer.url"?:   string;
    pointtable?:        Pointtable;
    pool?:              MeetPool;
    qualify?:           Qualify;
    reservecount?:      number;
    "result.url"?:      string;
    sessions:           Session[];
    startmethod?:       number;
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
    clubid?:         number;
    coaches?:        Coaches;
    code?:           string;
    contact?:        ClubContact;
    name?:           string;
    "name.en"?:      string;
    nation?:         Nation;
    officials?:      Official[];
    region?:         Region;
    relays?:         RelayElement[];
    shortname?:      string;
    "shortname.en"?: string;
    swrid?:          number;
    type?:           ClubType;
}

export interface AthleteElement {
    athleteid:   number;
    birthdate?:  Date;
    entries?:    AthleteEntries;
    externalid?: string;
    firstname?:  string;
    gender:      Gender;
    handicap?:   Handicap;
    lastname?:   string;
    level?:      string;
    license?:    number | string;
    nation?:     Nation;
    results?:    Result[];
    swrid?:      number;
}

export interface AthleteEntries {
    entry: PurpleEntry[] | FluffyEntry;
}

export interface PurpleEntry {
    entrytime: string;
    eventid:   number;
    heatid?:   number;
    lane?:     number;
    meetinfo?: Meetinfo;
    status?:   EntryStatus;
}

export interface Meetinfo {
    city?:       string;
    course?:     Course;
    date?:       Date;
    meetinfoid?: number;
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
    Blr = "BLR",
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
    MDA = "MDA",
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
    eventid:         number;
    heatid?:         number;
    lane?:           number;
    relaypositions?: EntryRelayposition[];
}

export interface EntryRelayposition {
    athleteid: number;
    meetinfo?: Meetinfo;
    number:    number;
}

export enum Gender {
    F = "F",
    M = "M",
    X = "X",
}

export interface Handicap {
    breast?: number;
    free:    number;
    medley?: number;
}

export interface Result {
    comment?:        string;
    entrycourse?:    Course;
    entrytime?:      string;
    eventid:         number;
    heatid?:         number;
    lane?:           number;
    late?:           Formeet;
    points?:         number;
    reactiontime?:   number;
    relaypositions?: ResultRelayposition[];
    resultid:        number;
    splits?:         Split[];
    status?:         EntryStatus;
    swimtime:        string;
}

export enum Formeet {
    Yes = "yes",
}

export interface ResultRelayposition {
    athleteid?:    number;
    number:        number;
    reactiontime?: number;
    status?:       EntryStatus;
}

export interface Split {
    distance: number;
    swimtime: string;
}

export interface Coaches {
    coach: CoachElement[] | CoachElement;
}

export interface CoachElement {
    coachid?:  number;
    contact?:  CoachContact;
    firstname: string;
    gender:    Gender;
    lastname:  string;
    license?:  number | string;
    nation?:   Nation;
    type?:     CoachType;
}

export interface CoachContact {
    city:    string;
    email:   string;
    mobile?: number;
    phone?:  number;
    state:   string;
    street:  string;
    zip:     number;
}

export enum CoachType {
    Headcoach = "HEADCOACH",
}

export interface ClubContact {
    city?:     string;
    country?:  string;
    email?:    string;
    fax?:      number | string;
    internet?: string;
    mobile?:   number | string;
    name?:     string;
    phone?:    number | string;
    state?:    string;
    street?:   string;
    street2?:  string;
    zip?:      number | string;
}

export interface Official {
    firstname:  string;
    gender:     Gender;
    grade:      string;
    lastname:   string;
    license?:   string;
    nation?:    Nation;
    officialid: number;
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
    agemax:      number;
    agemin:      number;
    agetotalmax: number;
    agetotalmin: number;
    entries?:    RelayEntries;
    gender:      Gender;
    name?:       string;
    number?:     number;
    relayid?:    number;
    results?:    Result[];
}

export interface RelayEntries {
    entry: FluffyEntry[] | FluffyEntry;
}

export enum ClubType {
    Club = "CLUB",
    Unattached = "UNATTACHED",
}

export interface MeetContact {
    city?:     number | string;
    email?:    string;
    fax?:      number;
    internet?: string;
    name?:     string;
    phone?:    number | string;
    street?:   string;
    street2?:  string;
    zip?:      number | string;
}

export interface EasyAdditional {
    bank:        string;
    bic:         string;
    iban:        string;
    information: string;
    person:      string;
    poolcity:    string;
    poolname:    string;
    poolphone:   string;
    poolstreet:  string;
    poolzip:     number;
}

export interface Facility {
    city:    string;
    name?:   string;
    nation:  Nation;
    state?:  string;
    street?: string;
    zip?:    number | string;
}

export interface FeeElement {
    currency?: Currency;
    type:      FeeType;
    value:     number;
}

export enum Currency {
    Chf = "CHF",
    Eur = "EUR",
    Pln = "PLN",
}

export enum FeeType {
    Athlete = "ATHLETE",
    LateentryIndividual = "LATEENTRY.INDIVIDUAL",
    LateentryRelay = "LATEENTRY.RELAY",
    Relay = "RELAY",
}

export interface Pointtable {
    name:         PointtableName;
    pointtableid: number;
    version:      number;
}

export enum PointtableName {
    DSVMasterPerformanceTable = "DSV Master Performance Table",
    FINAPointScoring = "FINA Point Scoring",
    KNZBNEDWPSRankings = "KNZB NED WPS Rankings",
}

export interface MeetPool {
    lanemax?: number;
    lanemin?: number;
    name?:    string;
}

export interface Qualify {
    conversion?: string;
    from?:       Date;
    percent?:    number;
    until?:      Date;
}

export interface Session {
    date:               Date;
    daytime?:           string;
    endtime?:           string;
    events:             Event[];
    judges?:            Judge[];
    maxentriesathlete?: number;
    maxentriesrelay?:   number;
    name?:              string;
    number:             number;
    officialmeeting?:   string;
    pool?:              SessionPool;
    remarksjudge?:      string;
    teamleadermeeting?: string;
    warmupfrom?:        string;
    warmupuntil?:       string;
}

export interface Event {
    agegroups?:        AgegroupElement[];
    daytime?:          string;
    eventid:           number;
    fee?:              EventFee;
    gender?:           Gender;
    heats?:            Heat[];
    number:            number;
    order?:            number;
    preveventid?:      number;
    round?:            Round;
    swimstyle:         EventSwimstyle;
    timestandardrefs?: Timestandardref[];
    type?:             AgegroupType;
}

export interface AgegroupElement {
    agegroupid: number;
    agemax:     number;
    agemin:     number;
    calculate?: Calculate;
    gender?:    Gender;
    name?:      string;
    rankings?:  Ranking[];
    type?:      AgegroupType;
}

export enum Calculate {
    Total = "TOTAL",
}

export interface Ranking {
    order:    number;
    place:    number;
    resultid: number;
}

export enum AgegroupType {
    Masters = "MASTERS",
}

export interface EventFee {
    currency: Currency;
    value:    number;
}

export interface Heat {
    agegroupid?: number;
    daytime?:    string;
    heatid:      number;
    number:      number;
    order?:      number;
    status?:     HeatStatus;
}

export enum HeatStatus {
    Official = "OFFICIAL",
    Seeded = "SEEDED",
}

export enum Round {
    Fin = "FIN",
    Pre = "PRE",
    Tim = "TIM",
}

export interface EventSwimstyle {
    code?:        SwimstyleCode;
    distance:     number;
    name?:        SwimstyleName;
    relaycount:   number;
    stroke:       Stroke;
    swimstyleid?: number;
    technique?:   string;
}

export enum SwimstyleCode {
    Kl25Br = "KL:25BR",
    The200Кп = "200 КП",
    The25Bs = "25 BS",
    The25CRBs = "25 Cr-Bs",
    The25RüBs = "25 Rü-Bs",
    The4X25Fun = "4 x 25 Fun",
    The4Х50КП = "4 х 50 КП",
}

export enum SwimstyleName {
    KL25MBrust = "KL: 25m Brust",
    The200MКомплексноеПлавание = "200m Комплексное плавание",
    The25CrawlBeinschlag = "25 Crawl Beinschlag",
    The25MBeinschlag = "25m Beinschlag",
    The25RückenBeinschlag = "25 Rücken Beinschlag",
    The4X25FunStaffel = "4 x 25 Fun Staffel",
    The4Х50Комбинированная = "4 х 50 Комбинированная",
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
    fee?:               EventFee;
    marker:             MarkerEnum | number;
    timestandardlistid: number;
}

export enum MarkerEnum {
    Empty = "*",
    I = "I",
    IIIюн = "IIIюн",
    IIюн = "IIюн",
    Ii = "II",
    Iii = "III",
    Iюн = "Iюн",
    MarkerКМС = "КМС",
    MarkerМС = "МС",
    The1Юн = "1юн",
    The2Юн = "2юн",
    The3Юн = "3юн",
    Кмс = "кмс",
    Мс = "мс",
    Мсмк = "МСМК",
}

export interface Judge {
    number?:    number;
    officialid: number;
    role:       Role;
}

export enum Role {
    Cbo = "CBO",
    Ref = "REF",
    Sta = "STA",
    Tdg = "TDG",
    Tik = "TIK",
}

export interface SessionPool {
    lanemax:  number;
    lanemin?: number;
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
    order:        number;
    recordlistid: number;
    records:      Record[];
    type:         RecordlistType;
    updated:      Date;
}

export interface RecordlistAgegroup {
    agemax:     number;
    agemin:     number;
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
    athleteid: number;
    birthdate: Date;
    club?:     AthleteClub;
    firstname: string;
    gender:    Gender;
    lastname:  string;
    nation:    Nation;
}

export interface AthleteClub {
    clubid: number;
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
    number:  number;
}

export interface RecordSwimstyle {
    distance:   number;
    relaycount: number;
    stroke:     Stroke;
}

export enum RecordlistType {
    SuiJcr = "SUI.JCR",
}

export interface Timestandardlist {
    agegroup?:          TimestandardlistAgegroup;
    code?:              TimestandardlistCode;
    course:             Course;
    gender:             Gender;
    name?:              string;
    timestandardlistid: number;
    timestandards:      Timestandard[];
    type?:              TimestandardlistType;
}

export interface TimestandardlistAgegroup {
    agemax: number;
    agemin: number;
}

export enum TimestandardlistCode {
    H = "H",
    I = "I",
    IIIю = "IIIю",
    IIю = "IIю",
    Ii = "II",
    Iii = "III",
    Iю = "Iю",
    LV = "LV",
    Lt = "LT",
    NS = "NS",
    Д = "Д",
    ДДев = "Д дев",
    ДЮн = "Д юн",
    Кмс = "КМС",
    Мс = "МС",
    Мсмк = "МСМК",
}

export interface Timestandard {
    swimstyle: EventSwimstyle;
    swimtime:  string;
}

export enum TimestandardlistType {
    Default = "DEFAULT",
    Level = "LEVEL",
    Maximum = "MAXIMUM",
    Minimum = "MINIMUM",
}
