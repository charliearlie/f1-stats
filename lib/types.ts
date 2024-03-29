export type ResultResponse = {
  MRData: RaceTableMRData;
};

export type SeasonsResponse = {
  MRData: SeasonTableMRData;
};

export type ScheduleResponse = {
  MRData: ScheduleTableMRData;
};

export type StandingsResponse = {
  MRData: StandingsTableMRData;
};

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
}

export interface RaceTableMRData extends MRData {
  RaceTable: RaceTable;
}

export interface SeasonTableMRData extends MRData {
  SeasonTable: SeasonTable;
}

export interface ScheduleTableMRData extends MRData {
  RaceTable: ScheduleRaceTable;
}

export interface StandingsTableMRData extends MRData {
  StandingsTable: StandingsTable;
}

export type RaceTable = {
  season: string;
  round: string;
  Races: Race[];
};

export type ScheduleRaceTable = {
  season: string;
  round: string;
  Races: ScheduleRace[];
};

export type SeasonTable = {
  Seasons: Season[];
};

type StandingsTable = {
  season: string;
  StandingsLists: StandingsList[];
};

export type Season = {
  season: string;
  url: string;
};

export type Race = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  QualifyingResults?: QualifyingResult[];
  Results?: RaceResults[];
};

type Schedule = {
  date: string;
  time: String;
};

export type ScheduleRace = {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string; // race date
  time: string; // race time
  FirstPractice?: Schedule;
  SecondPractice?: Schedule;
  ThirdPractice?: Schedule;
  Qualifying?: Schedule;
};

export type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
};

export type Location = {
  lat: string;
  long: string;
  locality: string;
  country: string;
};

export type QualifyingResult = {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
};

export type RaceResults = {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time: Time;
  FastestLap: {
    rank: string;
    lap: string;
    Time: {
      time: string;
    };
    AverageSpeed: {
      units: string;
      speed: string;
    };
  } | null;
};

export type Driver = {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
};

export type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
};

export type Time = {
  time: string;
  millis: string;
};

type StandingsList = {
  season: string;
  round: string;
  DriverStandings: DriverStanding[];
};

type DriverStanding = {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
};

export type Standing = {
  driverName: string;
  position: string;
  points: string;
  wins: string;
  constructor: string;
};
