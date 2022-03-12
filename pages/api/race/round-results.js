import { mapRaceResponse } from "../../../util";

export default async function raceRoundResultsHandler(req, res) {
  const {
    query: { round, year },
    method,
  } = req;
  const results = await fetch(
    `https://ergast.com/api/f1/${year}/${round}/results.json`
  );

  const data = await results.json();

  if (results.ok) {
    if (data.MRData) {
      res.status(200).json({ ...mapRaceResponse(data) });
    }
  } else {
    res.status(500).json({ error: "poops" });
  }
}
