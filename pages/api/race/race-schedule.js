import { mapRaceResponse } from "../../../util";

export default async function raceRoundResultsHandler(req, res) {
  const {
    query: { year },
    method,
  } = req;
  const results = await fetch(`https://ergast.com/api/f1/${year}.json`);

  const data = await results.json();

  if (results.ok) {
    if (data.MRData) {
      res.status(200).json({
        races: data.MRData.RaceTable.Races,
        year: data.MRData.RaceTable.season,
      });
    }
  } else {
    res.status(500).json({ error: "poops" });
  }
}
