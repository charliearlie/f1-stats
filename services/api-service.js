import defaultAxios from "axios";

const axios = defaultAxios.create({ baseURL: "https://ergast.com/api/f1/" });

export const getYearQualifyingResults = async (selectedSeason) => {
  const response = await axios.get(
    `${selectedSeason}/qualifying.json?limit=600`
  );
  const seasonResults = response.data;
  const races = seasonResults.MRData.RaceTable.Races;

  return {
    year: seasonResults.MRData.RaceTable.season,
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

export const getListOfSeasons = async () => {
  const response = await axios.get("seasons.json?limit=100");
  const listOfSeasons = response.data;
  return listOfSeasons.MRData.SeasonTable.Seasons.map(
    (season) => season.season
  );
};
