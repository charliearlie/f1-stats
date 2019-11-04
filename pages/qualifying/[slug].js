import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";

import ApiService from "../../services/api-service";
import QualifyingTable from "../../components/qualifying/qualifying-table";

const useStyles = makeStyles({
  main: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    margin: "0 auto",
    marginTop: "120px",
    paddingTop: "40px",
    maxWidth: "1280px"
  }
});

function QualifyingResultPage(props) {
  const api = new ApiService();
  const styles = useStyles();
  const router = useRouter();
  const { slug } = router.query;

  const [raceData, setRaceData] = React.useState(slug);
  const [qualiData, setQualiData] = React.useState(null);

  React.useEffect(() => {
    setRaceData(slug);
    if (!qualiData && raceData) {
      fetchQualiData(raceData);
    }
  });

  async function fetchQualiData(raceSlug) {
    const data = await api.getRoundQualifyingData(raceSlug);
    setQualiData(data);
  }

  return (
    <div className={styles.main}>
      <QualifyingTable data={qualiData} />
    </div>
  );
}

export default QualifyingResultPage;
