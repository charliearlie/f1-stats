import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import {
  getDriverStandings,
  getRoundRaceResult,
} from "../../services/api-service";
import Card from "../../components/common/card/card";
import CardContent from "../../components/common/card/card-content";
import Link from "next/link";
import { RaceFullResult } from "../../interfaces/race-result.interface";
import RaceStatus from "../../components/race-status";

type RequestData = {
  season: string;
  round: string;
  circuit?: string;
  date: string;
  raceName?: string;
  results?: RaceFullResult[];
};

type Props = {
  data: RequestData;
};

function RacePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { circuit, date, raceName, results, round, season } = data;
  return (
    <main className="p-2 sm:p-8">
      <Card>
        <CardContent>
          <div className="flex flex-col text-center items-center justify-center border-b-2 my-4 py-4 border-gray-200">
            <h1>{raceName}</h1>
            <h2 className="text-lg sm:text-3xl">{circuit}</h2>
            <h3 className="text-sm sm:text-xl">{date}</h3>
            <Link
              href={`/qualifying/${season}/${round}`}
              className="font-semibold underline py-4 hover:text-gray-500"
            >
              View qualifying result
            </Link>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {results && results?.length > 0 ? (
              <table className="w-full text-sm text-left">
                <thead className="font-russo text-gray-800 uppercase text-md md:text-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                  <tr>
                    <th scope="col" className="px-2 py-3">
                      Pos.
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Driver
                    </th>
                    <th scope="col" className="px-3 py-3 hidden sm:table-cell">
                      Constructor
                    </th>
                    <th scope="col" className="px-3 py-3 hidden sm:table-cell">
                      Laps
                    </th>
                    <th scope="col" className="px-3 py-3">
                      Time
                    </th>
                    <th scope="col" className="px-3 py-3 hidden xs:table-cell">
                      Points
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr
                      key={result.driverId}
                      className="bg-white font-semibold border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-2 py-4">{result.position}</td>
                      <td
                        className={`px-2 sm:px-3 py-4 font-russo text-md sm:text-xl border-l-2 border-${result.constructorId}`}
                      >
                        <Link href={`/driver/${result.driverId}`}>
                          {result.driver}
                        </Link>
                      </td>
                      <td className="px-3 py-4 hidden sm:table-cell">
                        {result.constructor}
                      </td>
                      <td className="px-3 py-4 hidden sm:table-cell">
                        {result.lapsCompleted}
                      </td>
                      <td className="px-3 py-4">
                        <RaceStatus
                          status={result.status}
                          time={result.raceTime}
                        />
                      </td>
                      <td className="px-3 py-4 hidden xs:table-cell">
                        {result.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const [year, round] = query.round as string[];

  const roundData = await getRoundRaceResult(round, year);
  const standingsAfterRound = await getDriverStandings({ round });

  return {
    props: {
      data: roundData as RequestData,
      standings: standingsAfterRound,
    },
  };
};

export default RacePage;
