import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import QualifyingResult from "../components/qualifying/qualifying-result";
import DateService from "../services/date-service";
import ApiService from "../services/api-service";
import Link from "next/link";

const useStyles = makeStyles(theme =>
  createStyles({
    qualifying: {
      padding: "15px"
    },
    container: {
      background: "white",
      padding: "10px",
      display: "grid",
      alignItems: "center",
      gridTemplateColumns: "1fr"
    },
    primary: {
      padding: "5px"
    },
    seasonResults: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gridGap: "32px 16px"
    },
    resultInfo: {
      padding: "10px"
    },
    main: {
      margin: "0 auto",
      marginTop: "80px",
      maxWidth: 1280
    }
  })
);

function QualifyingPage(props) {
  const api = new ApiService();
  const dates = new DateService();
  const [qualiData, setQualiData] = useState(null);
  const styles = useStyles(props);

  useEffect(() => {
    fetchQualiData();
  }, []);

  const fetchQualiData = async () => {
    const data = await api.getSeasonQualifyingResults();
    console.log(data);
    setQualiData(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.qualifying}>
        <div className={styles.container}>
          {/* <Qualifying qualiData={qualiData} /> */}
          <div className={styles.primary}>
            <h1>2019 Season qualifying results</h1>
            <div className={styles.seasonResults}>
              {qualiData &&
                qualiData.map(event => <QualifyingResult qualiData={event} />)}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default QualifyingPage;
