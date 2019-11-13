import React, { useEffect, useState } from "react";
import { makeStyles, createStyles } from "@material-ui/styles";
import QualifyingResult from "../components/qualifying/qualifying-result";
import DateService from "../services/date-service";
import ApiService from "../services/api-service";

import Dropdown from "../components/common/dropdown";
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
    header: {
      display: "flex",
      justifyContent: "space-between",
      margin: "8px 0",
      "& h1": {
        margin: 0,

        "@media (max-width: 600px)": {
          fontSize: 20
        }
      }
    }
  })
);

function QualifyingPage(props) {
  const api = new ApiService();
  const dates = new DateService();
  const [qualiData, setQualiData] = useState(null);
  const [seasons, setSeasons] = useState(null);
  const styles = useStyles(props);

  useEffect(() => {
    fetchQualiData();
    fetchListOfSeasons();
  }, []);

  const fetchQualiData = async season => {
    const data = await api.getSeasonQualifyingResults(season);
    setQualiData(data);
  };

  const fetchListOfSeasons = async () => {
    const seasonData = await api.getSeasons();
    setSeasons(seasonData);
  };

  const changeQualiYear = season => {
    fetchQualiData(season);
  };

  return (
    <>
      <div className={styles.qualifying}>
        <div className={styles.container}>
          {/* <Qualifying qualiData={qualiData} /> */}
          <div className={styles.primary}>
            <div className={styles.header}>
              <h1>Qualifying results</h1>
              <Dropdown
                afterChange={changeQualiYear}
                options={seasons}
                startingOption={69}
              />
            </div>

            <div className={styles.seasonResults}>
              {qualiData &&
                qualiData.results.map(event => (
                  <QualifyingResult qualiData={event} />
                ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default QualifyingPage;
