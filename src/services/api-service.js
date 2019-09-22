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
}
