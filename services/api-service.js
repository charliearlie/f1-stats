import dayjs from "dayjs";
export default class ApiService {
  // This will become useful but this is a long process

  async getDriverData(driver) {
    const res = await fetch(
      `https://ergast.com/api/f1/drivers/${driver}/results.json?limit=300`
    );

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const raceData = data.MRData.RaceTable.Races;

        // TODO: Move out into own util file
        const getFastestLapData = race => {
          if (race.Results[0].FastestLap) {
            const fastestLapData = race.Results[0].FastestLap;

            return {
              isLapRecord: fastestLapData.rank == 1,
              fastestLap: fastestLapData.lap,
              fastestLapTime: fastestLapData.Time.time
            };
          }
          return {};
        };

        //TODO: Move out into util file
        const getDriverData = raceData => {
          const driver = raceData[0].Results[0].Driver;

          return {
            driver: driver.givenName + " " + driver.familyName,
            dateOfBirth: driver.dateOfBirth,
            nationality: driver.nationality
          };
        };

        const driver = getDriverData(raceData);

        return {
          ...driver,
          grandPrix: results.length,
          results: raceData
            .map(race => {
              const fastestLap = getFastestLapData(race);

              return {
                position: race.Results[0].position,
                grid: race.Results[0].grid,
                raceName: race.raceName,
                ...fastestLap
                // driverNumber: race.number,
                // driverCode: race.Driver.code,
                // constructor: race.Constructor.name
              };
            })
            .reverse()
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

  async getSeasonQualifyingResults(season) {
    const year = season || "current";
    const res = await fetch(
      `https://ergast.com/api/f1/${year}/qualifying/1.json`
    );

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const races = data.MRData.RaceTable.Races;

        return {
          year: data.MRData.RaceTable.season,
          results: races.map(race => ({
            circuit: race.Circuit.circuitName,
            country: race.Circuit.Location.country,
            date: race.date,
            fastestLap: race.QualifyingResults[0],
            raceName: race.raceName,
            round: race.round,
            season: race.season
          }))
        };
      }
    } else {
      return "Error";
    }
  }

  async getSeasons() {
    const res = await fetch("https://ergast.com/api/f1/seasons.json?limit=100");

    const data = await res.json();

    if (res.ok) {
      if (data.MRData) {
        const seasons = data.MRData.SeasonTable.Seasons;

        return seasons.map(season => season.season);
      }
    } else {
      return "Error";
    }
  }
}
