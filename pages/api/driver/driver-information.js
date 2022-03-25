import DriverService from "../../../services/driver-service";
export default async function driverInformationHandler(req, res) {
  const {
    query: { driverId },
    method,
  } = req;

  const driverInformationResponse = await fetch(
    `http://ergast.com/api/f1/drivers/${driverId}.json`
  );

  const driverResultsResponse = await fetch(
    `https://ergast.com/api/f1/drivers/${driverId}/results.json?limit=400.json` // Limit is 400 just for Lewis Hamilton inevitably getting more than 300
  );

  if (driverInformationResponse.ok) {
    const driverInformationData = await driverInformationResponse.json();
    const driverResultsData = await driverResultsResponse.json();

    if (driverResultsData.MRData) {
      const driverInfo = driverInformationData.MRData.DriverTable.Drivers[0];
      const raceData = {
        totalRaces: driverResultsData.MRData.total,
        races: driverResultsData.MRData.RaceTable.Races,
      };

      const driverService = DriverService({ ...driverInfo, ...raceData });

      res.status(200).json(driverService.getFullDriverData());
    }
  } else {
    res.status(500).json({ error: "error" });
  }
}
