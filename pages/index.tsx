import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Row from "../components/common/row/row";
import CardImage from "../components/common/card/card-image";
import CardContent from "../components/common/card/card-content";
import RowCard from "../components/common/row/row-card";
import { getYearQualifyingResults } from "../services/api-service";
import { IQualiSeason } from "../interfaces";
import QualiPreview from "../components/schedule/quali-preview";

type Props = {
  qualifyingRow: IQualiSeason;
  raceRow: any;
  archiveRow: any;
};

const Home = ({
  qualifyingRow,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="">
      <Row heading="2023 season" link="/qualifying?year=2023">
        {qualifyingRow.results.map((result) => (
          <QualiPreview key={result.raceName} type="row" {...result} />
        ))}
      </Row>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  //const listOfSeasons = await getListOfSeasons();
  const qualifyingRow = await getYearQualifyingResults("current");
  // const driverPoles = getDriverPolesForASeason(seasonResults);

  return {
    props: {
      qualifyingRow,
      raceRow: "",
      archiveRow: "",
    },
  };
};

export default Home;
