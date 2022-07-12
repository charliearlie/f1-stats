import { ICircuit } from "./circuit.interface";
import { IDriver } from "./driver.interface";

export interface IRaceSeason {
  year: string;
  results: Result[];
}

interface Result {
  circuit: ICircuit;
  country: string;
  date: string;
  winner: IDriver;
  raceName: string;
  round: string;
  season: string;
  time: string;
}