import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  getListOfSeasons,
  getYearQualifyingResults,
} from "../../services/api-service";

import { IDriver, IQualiSeason } from "../../interfaces";
import Schedule from "../../components/schedule/schedule";
import Card from "../../components/common/card/card";
import CardImage from "../../components/common/card/card-image";
import CardContent from "../../components/common/card/card-content";
import { getDriverPolesForASeason } from "../../services/quali-service";

interface IProps {
  data: {
    driverPoles: IDriver[];
    listOfSeasons: string[];
    results: IQualiSeason;
    season: string;
  };
}

function QualifyingPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { driverPoles, listOfSeasons, results, season } = data;

  console.log("driverPoles", driverPoles);

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
              {season} Qualifying
            </h1>
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1">
        <div className="">
          <Schedule type="qualifying" qualiSeason={results} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<IProps> = async ({
  query,
}) => {
  const { year } = query;

  const season = year || "current";
  const listOfSeasons = await getListOfSeasons();
  const seasonResults = await getYearQualifyingResults(season as string);
  const driverPoles = getDriverPolesForASeason(seasonResults);

  return {
    props: {
      data: {
        driverPoles,
        results: seasonResults,
        listOfSeasons,
        season: season === "current" ? "2023" : (season as string), // I hate this
      },
    },
  };
};

export default QualifyingPage;
