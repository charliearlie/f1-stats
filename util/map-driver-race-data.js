export const mapDriverRaceData = ({
  date,
  raceName,
  Results,
  round,
  season,
}) => {
  const { grid, laps, number, points, position, status } = Results[0];
  return {
    date,
    dnf: status !== "Finished",
    number,
    laps,
    points,
    position,
    qualifyingPosition: grid,
    raceName,
    round,
    season,
    status,
  };
};
