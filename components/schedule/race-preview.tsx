import countryCodeMap, {
  ICountryCodeMap,
} from "../../lib/util/country-code-map";
import Card from "../common/card/card";
import CardAction from "../common/card/card-action";
import CardContent from "../common/card/card-content";
import CardImage from "../common/card/card-image";
import PreviewLink from "./preview-link";

import type { RaceResult } from "../../interfaces/race-season.interface";

type Props = Pick<
  RaceResult,
  | "circuit"
  | "country"
  | "podium"
  | "round"
  | "raceName"
  | "raceTime"
  | "season"
  | "winner"
>;

export default function RacePreview({
  circuit,
  country,
  podium,
  raceName,
  raceTime,
  round,
  season,
  winner,
}: Props) {
  let day;
  let monthName;
  if (raceTime?.date) {
    const raceDate = new Date(raceTime.date);
    monthName = raceDate.toLocaleString("default", {
      month: "short",
    });
    day = raceDate.getDate();
  }
  return (
    <Card>
      <CardImage
        to={`/races/${season}/${round}`}
        src={`https://flagcdn.com/h240/${
          countryCodeMap[country as keyof ICountryCodeMap]
        }.png`}
      />
      <CardContent>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <h3 className="">{country}</h3>
              <h4 className="font-light text-sm leading-4">{raceName}</h4>
            </div>
            {monthName && (
              <div className="flex flex-col items-center">
                <p className="text-lg font-russo">{day}</p>
                <p className="text-lg font-russo">{monthName.toUpperCase()}</p>
              </div>
            )}
          </div>
          <p className="font-sans font-semibold text-md">{circuit.name}</p>
          <div className="h-20 mt-2">
            {podium ? (
              podium.map((r, index) => (
                <div
                  className={`border-l-4 border-${r.constructor} pl-1 py-0 mb-1 flex items-center`}
                  key={r.driver}
                >
                  <span className="font-semibold flex justify-between items-center w-full text-sm">
                    <span className={`${index === 0 ? "font-russo" : ""}`}>
                      {r.driver}
                    </span>
                    <span className="bg-gray-200 dark:bg-gray-900 rounded-lg py-0.5 px-2 text-xs font-bold">
                      {r.time?.time}
                    </span>
                  </span>
                </div>
              ))
            ) : (
              <img
                alt="Toto angry"
                className="h-full w-full object-contain"
                src="https://cdn.images.express.co.uk/img/dynamic/73/590x/1521303_1.jpg?r=1636981906761"
              />
            )}
          </div>
        </div>
      </CardContent>
      <CardAction>
        <PreviewLink href={`/races/${season}/${round}`}>
          <span className="font-russo">
            {winner ? "View results" : "View previous results"}
          </span>
        </PreviewLink>
      </CardAction>
    </Card>
  );
}
