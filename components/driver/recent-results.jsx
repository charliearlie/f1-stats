import {
  FlagNameAndPosition,
  LapTime,
  Position,
  Result,
  ResultRight
} from "./styles/recent-results";
function RecentResults(props) {
  const { driverData } = props;
  return (
    <>
      {driverData.results.map(race => (
        <Result>
          <FlagNameAndPosition>
            <Position position={race.position}>{race.position}</Position>
            <img src={`/images/flags/${race.country.toLowerCase()}.png`} />
            <h2>
              {race.raceName} ({race.season})
            </h2>
          </FlagNameAndPosition>
          <ResultRight>
            <span>Grid position:</span> <span>{race.grid}</span>
            <span>Fastest Lap:</span>{" "}
            <span>
              <LapTime fastestLap={race.isLapRecord}>
                {race.fastestLapTime}{" "}
              </LapTime>
            </span>
          </ResultRight>
          {/* <div>
            <p>
              Fastest Lap: {race.fastestLapTime} (Lap: {race.fastestLap}) <br />
              {race.isLapRecord && <span>FASTEST LAP</span>}
            </p>
          </div> */}
        </Result>
      ))}
    </>
  );
}

export default RecentResults;
