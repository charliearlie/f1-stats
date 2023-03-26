import { QualifyingResult } from "../lib/types";

export interface IQualiSeason {
  year: string;
  results: QualiResult[];
}

export interface QualiResult {
  circuit: { id: string; name: string };
  country: string;
  date: string;
  fastestLap: QualifyingResult | null;
  raceName: string;
  round: string;
  season: string;
  raceHasCompleted: boolean;
  raceTime: { date: string; time: string };
  qualifyingTime: { date: string; time: string };
  topThree?: qualiPreviewResult[];
}

export type qualiPreviewResult = {
  constructor: string;
  driver: string;
  position: string;
  timeQualified: string | null;
};
