import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Row from "../components/common/row/row";
import CardImage from "../components/common/card/card-image";
import CardContent from "../components/common/card/card-content";
import RowCard from "../components/common/row/row-card";
import {
  getYearQualifyingResults,
  getYearRaceResults,
} from "../services/api-service";
import { IQualiSeason, IRaceSeason } from "../interfaces";
import QualiPreview from "../components/schedule/quali-preview";
import RacePreview from "../components/schedule/race-preview";
import Card from "../components/common/card/card";

type Props = {
  qualifyingRow: any;
  raceRow: IRaceSeason;
  archiveRow: any;
};

const Home = ({
  raceRow,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="">
      {/* <Card>
        <CardImage src="https://motorsportmagazine.b-cdn.net/wp-content/uploads/2019/04/Michael-Schumaacher-raises-his-arm-in-victory-after-winning-the-20026-F1-Chinese-Grand-Prix.jpg" />
        <CardContent>
          <h1 className="p-8">F1 Stats</h1>
        </CardContent>
      </Card> */}
      <Row heading="2023 season" link="/races?year=2023">
        {raceRow.results.map((result) => (
          <RacePreview key={result.raceName} type="row" {...result} />
        ))}
      </Row>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  //const listOfSeasons = await getListOfSeasons();
  const raceRow = await getYearRaceResults("current");
  // const driverPoles = getDriverPolesForASeason(seasonResults);

  return {
    props: {
      raceRow: { ...raceRow, results: raceRow.results.slice(0, 4) },
      qualifyingRow: "",
      archiveRow: "",
    },
  };
};

export default Home;
