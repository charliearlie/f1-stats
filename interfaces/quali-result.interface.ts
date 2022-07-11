export interface IQualiResult {
  circuit: string;
  raceName: string;
  results: Result[];
}

interface Result {
  constructor: string;
  constructorId: string;
  delta: string;
  driver: string;
  driverCode: string;
  driverId: string;
  driverNumber: string;
  position: string;
  qualifyingSessions: string[];
  qualifyingTime: string;
}
