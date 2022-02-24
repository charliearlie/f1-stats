export default async function seasonQualifyingResultsHandler(
  req,
  res
) {
  const {
    query: { year },
    method,
  } = req

  const season = year || "current";
    const results = await fetch(
      `https://ergast.com/api/f1/${season}/qualifying/1.json`
    );

    const data = await results.json();

    if (results.ok) {
      if (data.MRData) {
        const races = data.MRData.RaceTable.Races;

        const response = {
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
        res.status(200).json(response)
      }
    } else {
      res.status(500).json({error: 'poops'})
    }
}
