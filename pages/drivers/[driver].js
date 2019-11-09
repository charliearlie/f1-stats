import { useRouter } from "next/router";

import RecentResults from "../../components/driver/recent-results";

import ApiService from "../../services/api-service";

function DriverPage(props) {
  const api = new ApiService();
  const router = useRouter();
  const { driver } = router.query;

  const [driverName, setDriverName] = React.useState(driver);
  const [driverData, setDriverData] = React.useState(driver);

  React.useEffect(() => {
    setDriverName(driver);
    if (driverName && !driverData) {
      fetchDriverData(driverName);
    }
  });

  async function fetchDriverData(driverName) {
    const data = await api.getDriverData(driverName);
    setDriverData(data);
  }

  if (driverData) {
    console.log(driverData);
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
          <div>
            <h1>{driverData.driver}</h1>
            <RecentResults driverData={driverData} />
          </div>
          <div>
            <img
              height="300px"
              width="300px"
              src={`/images/drivers/${driverName}.png`}
            />
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default DriverPage;
