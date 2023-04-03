import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Row from "../components/common/row/row";
import {
  getDriverStandings,
  getListOfSeasons,
  getYearRaceResults,
} from "../services/api-service";
import RacePreview from "../components/schedule/race-preview";
import RowCard from "../components/common/row/row-card";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardImage,
} from "../components/common/card";
import PreviewLink from "../components/schedule/preview-link";
import archiveImageMap from "../lib/util/archive-images";

import type { IRaceSeason } from "../interfaces";
import type { Standing } from "../lib/types";
import MiniStandings from "../components/standings/mini-standings";

type Props = {
  qualifyingRow: any;
  raceRow: IRaceSeason;
  archiveRow: string[];
  standings: Standing[];
};

const Home = ({
  archiveRow,
  raceRow,
  standings,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Card>
        <CardContent>
          <h2>Driver standings</h2>
          <MiniStandings standings={standings} />
        </CardContent>
      </Card>
      <Row heading="2023 season" link="/races?year=2023">
        {raceRow.results.map((result) => (
          <RacePreview key={result.raceName} type="row" {...result} />
        ))}
      </Row>
      <Row heading="Archive" link={"/seasons"}>
        {archiveRow.map((row) => (
          <RowCard key={row}>
            <CardImage src={archiveImageMap[row]} />
            <CardContent>
              <h3 className="flex items-center justify-center text-3xl">
                {row}
              </h3>
            </CardContent>
            <CardAction>
              <PreviewLink href={`/races?year=${row}`}>
                <span className="font-russo">View season</span>
              </PreviewLink>
            </CardAction>
          </RowCard>
        ))}
      </Row>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const listOfSeasons = await getListOfSeasons();
  const raceRow = await getYearRaceResults("current");
  const standings = await getDriverStandings("current", 10);
  // const driverPoles = getDriverPolesForASeason(seasonResults);

  const archiveRow = listOfSeasons
    .filter((season) => season !== raceRow.year)
    .reverse()
    .slice(0, 4); // We will do slicing in the request files

  return {
    props: {
      raceRow: { ...raceRow, results: raceRow.results.slice(0, 4) },
      qualifyingRow: "",
      archiveRow,
      standings,
    },
  };
};

export default Home;
