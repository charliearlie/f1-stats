import RacePreview from "./race-preview";
import QualiPreview from "./quali-preview";
import type { IQualiSeason, IRaceSeason } from "../../interfaces";

interface Props {
  qualiSeason?: IQualiSeason;
  raceSeason?: IRaceSeason;
  type: "qualifying" | "race";
}

function Schedule({ qualiSeason, raceSeason, type }: Props) {
  if (qualiSeason && type === "qualifying") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {qualiSeason.results.map((result) => {
          return (
            <QualiPreview
              key={`${result.season} ${result.round}`} type="page"
              {...result}
            />
          );
        })}
      </div>
    );
  } else if (raceSeason && type === "race") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {raceSeason.results.map((result) => (
          <RacePreview key={`${result.season} ${result.round}`} {...result} />
        ))}
      </div>
    );
  }

  return null;
}

export default Schedule;
