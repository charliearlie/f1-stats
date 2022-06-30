import { IDriver, IQualiResult } from "../interfaces";
export const getDriverPolesForASeason = (
  season: IQualiResult
): Array<IDriver> => {
  if (season) {
    const poles = season.results.map((race) => race.fastestLap.Driver);
    const polesObject = poles.reduce(
      (obj: any, item: IDriver) => ({
        ...obj,
        [item.driverId]: (obj[item.driverId] || 0) + 1,
      }),
      {}
    );

    const accumulatedPoles = [];
    for (const [key, value] of Object.entries(polesObject)) {
      const driverInfo = poles.find((pole: IDriver) => pole.driverId === key);
      accumulatedPoles.push({ ...driverInfo, numberOfPoles: value });
    }

    return accumulatedPoles
      .sort((a, b) => a.numberOfPoles - b.numberOfPoles)
      .reverse();
  }

  return [];
};
