import dayjs from "dayjs";
export default class ApiService {
  // This will become useful but this is a long process

  async getLatestRoundQualifyingData() {
    const res = await fetch(
      `https://ergast.com/api/f1/current/last/qualifying.json`
    );

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const raceData = data.MRData.RaceTable.Races[0];
        const results = raceData.QualifyingResults;

        return {
          raceName: raceData.raceName,
          circuit: raceData.Circuit.circuitName,
          results: results.map(result => ({
            position: result.position,
            driver: result.Driver.givenName + " " + result.Driver.familyName,
            driverNumber: result.number,
            driverCode: result.Driver.code,
            constructor: result.Constructor.name,
            qualifyingSessions: [result["Q1"], result["Q2"], result["Q3"]]
          }))
        };
      }
    } else {
      return "Error";
    }
  }

  async getRoundQualifyingData(raceSlug) {
    console.log(raceSlug);
    const raceData = (raceSlug && raceSlug.split("-")) || [];
    const res = await fetch(
      `https://ergast.com/api/f1/${raceData[2]}/${raceData[0]}/qualifying.json`
    );

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const raceData = data.MRData.RaceTable.Races[0];
        const results = raceData.QualifyingResults;

        return {
          raceName: raceData.raceName,
          circuit: raceData.Circuit.circuitName,
          results: results.map(result => ({
            position: result.position,
            driver: result.Driver.givenName + " " + result.Driver.familyName,
            driverNumber: result.number,
            driverCode: result.Driver.code,
            constructor: result.Constructor.name,
            qualifyingSessions: [result["Q1"], result["Q2"], result["Q3"]]
          }))
        };
      }
    } else {
      return "Error";
    }
  }

  async getSeasonQualifyingResults() {
    const res = await fetch(
      `https://ergast.com/api/f1/current/qualifying/1.json`
    );

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const races = data.MRData.RaceTable.Races;

        return races.map(race => ({
          circuit: race.Circuit.circuitName,
          country: race.Circuit.Location.country,
          date: race.date,
          fastestLap: race.QualifyingResults[0],
          raceName: race.raceName,
          round: race.round,
          season: race.season
        }));
      }
    } else {
      return "Error";
    }
  }
}
