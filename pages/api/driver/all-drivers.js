export default async function driversHandler(req, res) {
  const driversResponse = await fetch(
    `https://ergast.com/api/f1/drivers.json?limit=1000`
  );

  if (driversResponse.ok) {
    const driverData = await driversResponse.json();

    if (driverData.MRData) {
      const drivers = driverData.MRData.DriverTable.Drivers;

      res.status(200).json(
        drivers.map((driver) => ({
          ...driver,
          fullName: `${driver.givenName} ${driver.familyName}`,
        }))
      );
    }
  } else {
    res.status(500).json({ error: "error" });
  }
}
