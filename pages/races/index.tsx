import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useCallback, useEffect, useState } from "react";
import DriverPolesList from "../../components/qualifying/driver-poles-list";
import {
  getListOfSeasons,
  getYearRaceResults,
} from "../../services/api-service";

import { IRaceSeason } from "../../interfaces";
import { Schedule } from "../../components/schedule";
import Card from "../../components/common/card/card";
import CardImage from "../../components/common/card/card-image";
import CardContent from "../../components/common/card/card-content";

interface Props {
  data: {
    listOfSeasons: string[];
    results: IRaceSeason;
    season: string;
  };
}

function RacePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results, season } = data;
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
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
        <div className="sm:col-span-2 xl:col-span-4">
          <Schedule type="race" raceSeason={results} />
        </div>
        <div className="xl:col-span-1">
          <Card>
            <CardContent>A sidebar</CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const { year } = query;

  const season = year || "current";
  const listOfSeasons = await getListOfSeasons();
  const results = await getYearRaceResults(season as string);

  return {
    props: {
      data: {
        results,
        listOfSeasons,
        season: season === "current" ? "2023" : (season as string), // I hate this
      },
    },
  };
};

export default RacePage;
