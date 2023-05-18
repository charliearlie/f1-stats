import {
  getListOfSeasons,
  getYearRaceResults,
} from "../../services/api-service";

import { Schedule } from "../../components/schedule";
import Card from "../../components/common/card/card";
import CardImage from "../../components/common/card/card-image";
import CardContent from "../../components/common/card/card-content";
import YearSelect from "../components/schedule/year-select";

type Props = {
  searchParams?: {
    year?: string;
  };
};

export default async function RacePage(props: Props) {
  const season = props?.searchParams?.year || "current";
  const listOfSeasons = await getListOfSeasons();
  const results = await getYearRaceResults(season as string);
  return (
    <main className="p-2 lg:p-4 grid grid-cols-1 gap-4">
      <Card>
        <CardImage
          className="h-48 md:h-80 object-cover rounded-t-lg"
          src="https://res.cloudinary.com/bidhub/image/upload/c_scale,w_1952/v1679354072/brakeneck/Screenshot_2023-03-20_at_23.14.11.png"
        />
        <CardContent>
          <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-2xl md:text-4xl font-russo tracking-wider text-center">
              {season} Race calendar
            </h1>
            <YearSelect
              seasons={listOfSeasons}
              selectedYear={season}
              type="races"
            />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <div className="sm:col-span-2 xl:col-span-5">
          <Schedule type="race" raceSeason={results} />
        </div>
      </div>
    </main>
  );
}
