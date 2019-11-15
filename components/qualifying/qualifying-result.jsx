import Link from "next/link";
import DateService from "../../services/date-service";

import Preview from "../common/preview";

import {
  Chevron,
  Circuit,
  Country,
  Days,
  FastestLap,
  FastestLapLabel,
  Flag,
  Month,
  RaceDateAndFlag,
  ResultTop,
  ResultInfo,
  Time
} from "./styles/qualifying-result";

function Qualifying({ qualiData }) {
  const dates = new DateService();
  const raceDates = dates.getRaceWeekendDatesObject(qualiData.date);

  const { days, month, year } = raceDates;
  if (qualiData) {
    return (
      <Preview legend={`Round ${qualiData.round}`}>
        <ResultInfo>
          <ResultTop>
            <RaceDateAndFlag>
              <Days>{days}</Days>
              <Flag>
                <img
                  src={`/images/flags/${qualiData.country.toLowerCase()}.png`}
                />{" "}
              </Flag>
            </RaceDateAndFlag>
            <div>
              <span>
                <Month>{month}</Month>
              </span>
              <div></div>
            </div>
          </ResultTop>
          <div>
            <Country>
              <Link
                prefetch
                href={`/qualifying/${qualiData.round}-${qualiData.country}-${year}`}
              >
                <a>{qualiData.country}</a>
              </Link>
              <Chevron>&#8250;</Chevron>
            </Country>
            <Circuit>{qualiData.circuit}</Circuit>
            <FastestLapLabel>Fastest Lap:</FastestLapLabel>
            <FastestLap>
              <Link
                prefetch
                href={`/drivers/${qualiData.fastestLap.Driver.driverId}`}
              >
                <a>{`${qualiData.fastestLap.Driver.givenName} ${qualiData.fastestLap.Driver.familyName}`}</a>
              </Link>
              <Time>{qualiData.fastestLap["Q3"]}</Time>
            </FastestLap>
          </div>
        </ResultInfo>
      </Preview>
    );
  }
}

export default Qualifying;
