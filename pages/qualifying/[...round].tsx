import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getRoundQualifyingResult } from "../../services/api-service";
import Card from "../../components/common/card/card";
import CardContent from "../../components/common/card/card-content";
import { QualiFullResult } from "../../interfaces/quali-result.interface";
import Link from "next/link";

type RequestData = {
  raceName?: string;
  circuit?: string;
  results?: QualiFullResult[];
};

type Props = {
  data: RequestData;
};

function QualifyingRoundPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { results } = data;
  return (
    <main className="p-8">
      <Card>
        <CardContent>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {results && results?.length > 0 ? (
              <table className="w-full text-sm text-left text-gray-800 dark:text-gray-200">
                <thead className="text-xs font-russo text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
                  <tr>
                    <th scope="col" className="px-2 py-3">
                      Pos.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Driver
                    </th>
                    <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                      Q1
                    </th>
                    <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                      Q2
                    </th>
                    <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                      Q3
                    </th>
                    <th scope="col" className="px-6 py-3 sm:hidden">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result) => (
                    <tr className="bg-white font-semibold border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-2 py-4">{result.position}</td>
                      <td
                        className={`px-6 py-4 font-russo text-lg sm:text-xl border-l-2 border-${result.constructorId}`}
                      >
                        <Link href={`/driver/${result.driverId}`}>
                          {result.driver}
                        </Link>
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        {result.qualifyingSessions.q1}
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        {result.qualifyingSessions.q2}
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        {result.qualifyingSessions.q3}
                      </td>
                      <td className="px-6 py-4 font-bold sm:hidden">
                        {result.qualifyingTime}
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

  const roundData = await getRoundQualifyingResult(round, year);

  return {
    props: {
      data: {
        raceName: roundData.raceName,
        circuit: roundData.circuit,
        results: roundData.results,
      } as RequestData, // Hideous that I have to do this
    },
  };
};

export default QualifyingRoundPage;
