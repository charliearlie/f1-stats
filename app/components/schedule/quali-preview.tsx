import { QualiResult } from "@/interfaces/quali-season.interface";
import countryCodeMap, { ICountryCodeMap } from "@/lib/util/country-code-map";
import Card from "../common/card/card";
import CardAction from "../common/card/card-action";
import CardContent from "../common/card/card-content";
import CardImage from "../common/card/card-image";
import RowCard from "../common/row/row-card";
import PreviewLink from "./preview-link";

type Props = Pick<
  QualiResult,
  | "circuit"
  | "country"
  | "fastestLap"
  | "round"
  | "raceName"
  | "raceTime"
  | "season"
  | "topThree"
> & { type: "page" | "row" };

export default function QualiPreview({
  circuit,
  country,
  fastestLap,
  raceName,
  raceTime,
  round,
  season,
  topThree,
  type,
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

  const CardWrapper = type === "page" ? Card : RowCard;
  return (
    <CardWrapper>
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
            {topThree ? (
              topThree.map((r) => (
                <div
                  className={`border-l-4 border-${r.constructor} pl-1 py-0 mb-1 flex items-center`}
                  key={r.driver}
                >
                  <span className="text-sm font-semibold flex justify-between items-center w-full">
                    <span>{r.driver}</span>
                    <span className="bg-gray-200 dark:bg-gray-900 rounded-lg py-0.5 px-2 text-xs font-bold">
                      {r.timeQualified}
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
        <PreviewLink href={`/qualifying/${season}/${round}`}>
          <span className="font-russo">
            {fastestLap ? "View results" : "View previous results"}
          </span>
        </PreviewLink>
      </CardAction>
    </CardWrapper>
  );
}
