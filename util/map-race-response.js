export const mapRaceResponse = (response) => {
  const data = response.MRData.RaceTable;
  const year = data.season;

  const race = data.Races[0];

  if (race) {
    return {
      year,
      results: race.Results.map((driverData) => ({
        driver: {
          ...driverData.Driver,
          driverNumber: driverData.number,
          position: driverData.position,
          grid: driverData.grid,
          status: driverData.status,
          time: driverData.Time?.time,
        },
      })),
      circuit: {
        id: race.Circuit.circuitId,
        name: race.Circuit.circuitName,
      },
      country: race.Circuit.Location.country,
      date: race.date,
      time: race.time,
      fastestLap: 0, // Task to obtain fastest lap from a race
      raceName: race.raceName,
      round: race.round,
      season: race.season,
    };
  }

  return {};
};
