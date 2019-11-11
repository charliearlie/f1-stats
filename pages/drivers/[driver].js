import { useRouter } from "next/router";

import DriverInformation from "../../components/driver/driver-information";
import DriverTabs from "../../components/driver/driver-tabs";

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
    return (
      <>
        <DriverInformation driverName={driverName} driverData={driverData} />
        <DriverTabs driverData={driverData} />
      </>
    );
  }

  return null;
}

export default DriverPage;
