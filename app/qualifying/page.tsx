import {
  getListOfSeasons,
  getYearQualifyingResults,
} from "../../services/api-service";
import Schedule from "../../components/schedule/schedule";
import Card from "../../components/common/card/card";
import CardImage from "../../components/common/card/card-image";
import CardContent from "../../components/common/card/card-content";
import { getDriverPolesForASeason } from "../../services/quali-service";
import YearSelect from "../components/schedule/year-select";
import Link from "next/link";

type Props = {
  searchParams?: {
    year?: string;
  };
};

export default async function QualifyingPage(props: Props) {
  const season = props?.searchParams?.year || "current";
  const listOfSeasons = await getListOfSeasons();
  const results = await getYearQualifyingResults(season as string);
  const driverPoles = getDriverPolesForASeason(results);

  return (
    <>
      <Card>
        <CardImage
          className="h-48 md:h-80 object-cover rounded-t-lg"
          src="https://res.cloudinary.com/bidhub/image/upload/c_scale,w_1952/v1679354072/brakeneck/Screenshot_2023-03-20_at_23.14.11.png"
        />
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-russo tracking-wider text-center">
              {season} Qualifying
            </h1>
            {driverPoles.map((driver) => (
              <Link
                key={driver.code}
                href={`/driver/${driver.driverId}`}
                className="flex gap-2"
              >
                <div className={`border-l-2 border-black`}>
                  {driver.familyName} {driver.numberOfPoles}
                </div>
              </Link>
            ))}
            <YearSelect
              seasons={listOfSeasons}
              selectedYear={season}
              type="qualifying"
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1">
        <div className="">
          <Schedule type="qualifying" qualiSeason={results} />
        </div>
      </div>
    </>
  );
}
