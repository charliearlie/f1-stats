import { mapQualifyingResponse } from "../../../util";

export default async function circuitQualifyingResultsHandler(req, res) {
  const {
    query: { circuitId, year },
    method,
  } = req;
  const results = await fetch(
    `https://ergast.com/api/f1/${year}/circuits/${circuitId}/qualifying.json`
  );

  const data = await results.json();

  if (results.ok) {
    if (data.MRData) {
      res.status(200).json({ ...mapQualifyingResponse(data) });
    }
  } else {
    res.status(500).json({ error: "poops" });
  }
}
