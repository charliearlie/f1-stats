import { mapQualifyingResponse } from "../../../util";

export default async function circuitInformationHandler(req, res) {
  const {
    query: { circuitId },
    method,
  } = req;
  const results = await fetch(
    `https://ergast.com/api/f1/circuits/${circuitId}.json`
  );

  const data = await results.json();

  if (results.ok) {
    if (data.MRData) {
      const circuit = data.MRData.CircuitTable.Circuits[0];
      res.status(200).json({ circuit });
    }
  } else {
    res.status(500).json({ error: "poops" });
  }
}
