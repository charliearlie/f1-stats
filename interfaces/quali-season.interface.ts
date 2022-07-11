import { ICircuit } from "./circuit.interface";
import { IFastestLap } from "./fastest-lap.interface";
export interface IQualiSeason {
  year: string;
  results: Result[];
}

interface Result {
  circuit: ICircuit;
  country: string;
  date: string;
  fastestLap: IFastestLap;
  raceName: string;
  round: string;
  season: string;
}
