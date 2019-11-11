import {
  DriverAvatar,
  DriverAvatarWrapper,
  DriverData,
  DriverInfo,
  DriverItem,
  DriverName
} from "./styles/driver-information";
function DriverInformation({ driverData, driverName }) {
  const renderDriverData = () => {};
  return (
    <DriverInfo>
      <DriverAvatarWrapper>
        <DriverAvatar src={`/images/drivers/${driverName}.png`} />
      </DriverAvatarWrapper>
      <div>
        <DriverName>{driverData.driver}</DriverName>
        {/* TODO: Sort out the object names so we can loop through this data instead */}
        <DriverData>
          <DriverItem>
            <span>Age: </span>
            <span>{driverData.age} years old</span>
          </DriverItem>
          <DriverItem>
            <span>Nationality: </span>
            <span>{driverData.nationality}</span>
          </DriverItem>
          <DriverItem>
            <span>Grand Prixs: </span>
            <span>{driverData.grandPrix}</span>
          </DriverItem>
          <DriverItem>
            <span>Highest Finish: </span>
            <span>{driverData.highestFinish}</span>
          </DriverItem>
          <DriverItem>
            <span>Race Wins: </span>
            <span>{driverData.raceWins}</span>
          </DriverItem>
        </DriverData>
      </div>
    </DriverInfo>
  );
}

export default DriverInformation;
