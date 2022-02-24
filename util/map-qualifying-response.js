export const mapQualifyingResponse = (response) => {
  const races = response.MRData.RaceTable.Races;

  return {
    year: response.MRData.RaceTable.season,
    results: races.map((race) => ({
      circuit: {
        id: race.Circuit.circuitId,
        name: race.Circuit.circuitName,
      },
      country: race.Circuit.Location.country,
      date: race.date,
      fastestLap: race.QualifyingResults[0],
      raceName: race.raceName,
      round: race.round,
      season: race.season,
    })),
  };
};
