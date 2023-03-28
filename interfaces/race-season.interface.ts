import { Time } from "../lib/types";
import { ICircuit } from "./circuit.interface";
import { IDriver } from "./driver.interface";

export interface IRaceSeason {
  year: string;
  results: RaceResult[];
}

export interface RaceResult {
  circuit: ICircuit;
  country: string;
  date: string;
  winner: IDriver | null;
  raceName: string;
  round: string;
  season: string;
  raceHasCompleted?: boolean;
  raceTime: { date: string; time: string };
  podium?: RacePreviewResult[];
}

export type RacePreviewResult = {
  constructor: string;
  driver: string;
  position: string;
  time?: Time | null;
};
