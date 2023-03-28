import { Time } from "../lib/types";

export interface IRaceResult {
  date: string;
  season: string;
  round: string;
  circuit: string;
  raceName: string;
  results: RaceFullResult[];
}

export interface RaceFullResult {
  constructor: string;
  constructorId: string;
  date: string;
  delta: string;
  driver: string;
  driverCode: string;
  driverId: string;
  driverNumber: string;
  position: string;
  lapsCompleted: string;
  points?: string;
  raceTime: Time;
  startingPosition: string;
  status: string;
}
