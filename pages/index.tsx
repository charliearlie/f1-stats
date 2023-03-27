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
  console.log(qualifyingRow);
  return (
    <div className="">
      <Row>
        {qualifyingRow.results.map((result) => (
          <QualiPreview type="row" {...result} />
        ))}
        <RowCard>
          <CardImage src="https://wealthofgeeks.com/wp-content/uploads/2022/07/spongebob-rainbow-meme-imagination.jpg" />
          <CardContent>
            <h2>Mate</h2>
          </CardContent>
        </RowCard>
        <RowCard>
          <CardImage src="https://wealthofgeeks.com/wp-content/uploads/2022/07/spongebob-rainbow-meme-imagination.jpg" />
          <CardContent>
            <h2>Mate</h2>
          </CardContent>
        </RowCard>
        <RowCard>
          <CardImage src="https://wealthofgeeks.com/wp-content/uploads/2022/07/spongebob-rainbow-meme-imagination.jpg" />
          <CardContent>
            <h2>Mate</h2>
          </CardContent>
        </RowCard>
        <RowCard>
          <CardImage src="https://wealthofgeeks.com/wp-content/uploads/2022/07/spongebob-rainbow-meme-imagination.jpg" />
          <CardContent>
            <h2>Mate</h2>
          </CardContent>
        </RowCard>
        <RowCard>
          <CardImage src="https://wealthofgeeks.com/wp-content/uploads/2022/07/spongebob-rainbow-meme-imagination.jpg" />
          <CardContent>
            <h2>Mate</h2>
          </CardContent>
        </RowCard>
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
