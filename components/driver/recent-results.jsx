function RecentResults(props) {
  const { driverData } = props;
  return (
    <>
      <h2>Recent results</h2>
      {driverData.results.map(race => (
        <div style={{ maxWidth: "600px", borderBottom: "1px solid #bbb" }}>
          <h4>{race.raceName}</h4>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Starting grid position: {race.grid}</span>
            <span>Finished: {race.position}</span>
          </div>
          <div>
            <p>
              Fastest Lap: {race.fastestLapTime} (Lap: {race.fastestLap}) <br />
              {race.isLapRecord && <span>FASTEST LAP</span>}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default RecentResults;
