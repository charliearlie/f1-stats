export default async function seasonsHandler(req, res) {
  const seasonsResponse = await fetch(
    `https://ergast.com/api/f1/seasons.json?limit=100`
  );

  const data = await seasonsResponse.json();

  if (seasonsResponse.ok) {
    if (data.MRData) {
      const seasons = data.MRData.SeasonTable.Seasons;

      const mappedSeasons = seasons.map((season) => season.season);

      res.status(200).json(mappedSeasons);
    }
  } else {
    res.status(500).json({ error: "error" });
  }
}
