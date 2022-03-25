import dayjs from "dayjs";
import { mapDriverRaceData } from "../util";
const driverService = (driverData) => {
  const driverInfo = driverData;

  return {
    getBasicDriverData() {
      return {
        driverCode: driverInfo.code,
        driver: driverInfo.givenName + " " + driverInfo.familyName,
        driverNumber: driverInfo.permanentNumber,
        dateOfBirth: driverInfo.dateOfBirth,
        nationality: driverInfo.nationality,
        totalRaces: driverInfo.totalRaces,
        allRacesParticipatedIn: driverInfo.races
          .map((race) => mapDriverRaceData(race))
          .reverse(),
      };
    },
    getAge() {
      const dob = dayjs(driverInfo.dateOfBirth);
      const today = dayjs();

      return today.diff(dob, "years");
    },
    getRaceWins() {
      const raceWins = driverInfo.races
        .map((race) => {
          return Number(race.Results[0].position);
        })
        .reduce((acc, currentValue) => acc + (currentValue === 1), 0);

      return raceWins;
    },
    getHighestRaceFinish() {
      return driverInfo.races
        .map((race) => {
          return Number(race.Results[0].position);
        })
        .sort()[0];
    },
    getNumberOfPodiums() {
      return driverInfo.races
        .map((race) => {
          return Number(race.Results[0].position);
        })
        .reduce((acc, currentValue) => acc + (currentValue <= 3), 0);
    },
    getFullDriverData() {
      return {
        ...this.getBasicDriverData(),
        age: this.getAge(),
        raceWins: this.getRaceWins(),
        highestRaceFinish: this.getHighestRaceFinish(),
        podiums: this.getNumberOfPodiums(),
      };
    },
  };

  //TODO: Calculate points earned throughout career

  //TODO: Calcualate highest grid position
};

export default driverService;
