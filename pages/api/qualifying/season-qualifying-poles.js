import { mapQualifyingResponse } from "../../../util";
export default async function seasonQualifyingPolesHandler(req, res) {
  const {
    query: { year },
    method,
  } = req;

  const season = year || "current";
  const results = await fetch(
    `https://ergast.com/api/f1/${season}/qualifying/1.json`
  );

  const data = await results.json();

  if (results.ok) {
    if (data.MRData) {
      res.status(200).json(mapQualifyingResponse(data));
    }
  } else {
    res.status(500).json({ error: "poops" });
  }
}
