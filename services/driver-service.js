export default class DriverService {
  getDriverData(raceData) {
    const driver = raceData[0].Results[0].Driver;

    return {
      driver: driver.givenName + " " + driver.familyName,
      dateOfBirth: driver.dateOfBirth,
      nationality: driver.nationality
    };
  }

  getRaceWins(raceData) {
    const raceWins = raceData
      .map(race => {
        return Number(race.Results[0].position);
      })
      .reduce((acc, currentValue) => acc + (currentValue === 1), 0);

    return raceWins;
  }

  //TODO: Calculate highest finish in race history
  getHighestRaceFinish(raceData) {
    return raceData
      .map(race => {
        return Number(race.Results[0].position);
      })
      .sort()[0];
  }

  //TODO: Calculate how many podiums the driver has achieved
  getNumberOfPodiums(raceData) {
    return raceData
      .map(race => {
        return Number(race.Results[0].position);
      })
      .reduce((acc, currentValue) => acc + (currentValue <= 3), 0);
  }

  //TODO: Calculate points earned throughout career

  //TODO: Calcualate highest grid position
}
