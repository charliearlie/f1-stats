import Link from "next/link";
import { makeStyles, createStyles } from "@material-ui/styles";
import DateService from "../../services/date-service";

import Preview from "../common/preview";

const useStyles = makeStyles(theme =>
  createStyles({
    resultTop: {
      borderBottom: "1px solid black",
      marginBottom: "8px",
      paddingBottom: "15px"
    },
    resultInfo: {
      padding: "0 10px"
    },
    main: {
      marginTop: "80px"
    },
    days: {
      fontSize: "24px"
    },
    month: {
      background: "black",
      borderRadius: "4px",
      color: "white",
      fontSize: "16px",
      fontWeight: "bold",
      padding: "0 3px",
      textTransform: "uppercase",
      width: "auto"
    },
    flag: {
      display: "flex",
      fontSize: "22px",
      justifyContent: "flex-end",
      height: "25px",
      alignItems: "center",
      height: "100%",

      "& img": {
        border: "1px solid #000",
        borderRadius: "4px",
        maxWidth: "50px",
        objectFit: "contain"
      }
    },
    raceDateAndFlag: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      marginBottom: "2px"
    },
    country: {
      display: "flex",
      alignItems: "center",
      margin: 0,
      "& a": {
        color: "black",
        textDecoration: "none"
      }
    },
    chevron: {
      fontSize: "32px",
      fontWeight: "normal",
      color: "red",
      marginLeft: "5px",
      marginTop: "-5px"
    },
    circuit: {
      margin: 0
    },
    fastestLap: {
      display: "flex",
      justifyContent: "space-between"
    },
    fastestLapLabel: {
      fontWeight: "bold"
    },
    time: {
      borderRadius: "4px",
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
      padding: "0 5px"
    }
  })
);
function Qualifying({ qualiData }) {
  const dates = new DateService();
  const raceDates = dates.getRaceWeekendDatesObject(qualiData.date);

  const { days, month, year } = raceDates;
  const styles = useStyles();
  if (qualiData) {
    return (
      <Preview legend={`Round ${qualiData.round}`}>
        <div className={styles.resultInfo}>
          <div className={styles.resultTop}>
            <div className={styles.raceDateAndFlag}>
              <span className={styles.days}>{days}</span>
              <div className={styles.flag}>
                <img
                  src={`/images/flags/${qualiData.country.toLowerCase()}.png`}
                />{" "}
              </div>
            </div>
            <div className={styles.raceDateAndFlag}>
              <span>
                <span className={styles.month}>{month}</span>
              </span>
              <div className={styles.banner}></div>
            </div>
          </div>
          <div className={styles.description}>
            <h2 className={styles.country}>
              <Link
                prefetch
                href={`/qualifying/${qualiData.round}-${qualiData.country}-${year}`}
              >
                <a>{qualiData.country}</a>
              </Link>
              <span className={styles.chevron}>&#8250;</span>
            </h2>
            <p className={styles.circuit}>{qualiData.circuit}</p>
            <p className={styles.fastestLapLabel}>Fastest Lap:</p>
            <div className={styles.fastestLap}>
              <p>{`${qualiData.fastestLap.Driver.givenName} ${qualiData.fastestLap.Driver.familyName}`}</p>
              <p className={styles.time}>{qualiData.fastestLap["Q3"]}</p>
            </div>
          </div>
        </div>
      </Preview>
    );
  }
}

export default Qualifying;
