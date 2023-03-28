export interface IQualiResult {
  circuit: string;
  raceName: string;
  results: QualiFullResult[];
}

export interface QualiFullResult {
  constructor: string;
  constructorId: string;
  date: string;
  delta: string;
  driver: string;
  driverCode: string;
  driverId: string;
  driverNumber: string;
  position: string;
  qualifyingSessions: { q1: string; q2: string; q3: string };
  qualifyingTime: string;
}
