import { useEffect, useState } from "react";
import { Container, Heading, List, ListItem } from "@chakra-ui/react";

import { IDriver, IQualiSeason } from "../../interfaces";
import { getDriverPolesForASeason } from "../../services/quali-service";

interface IProps {
  qualiSeason: IQualiSeason;
}

function DriverPolesList({ qualiSeason }: IProps) {
  const [driverPolesForASeason, setDriverPolesForASeason] = useState<IDriver[]>(
    []
  );

  useEffect(() => {
    const poles = getDriverPolesForASeason(qualiSeason);
    setDriverPolesForASeason(poles);
  }, [qualiSeason]);

  return (
    <Container>
      <Heading>Pole sitters {qualiSeason.year}</Heading>
      <List>
        {driverPolesForASeason.map((driver) => (
          <ListItem
            key={driver.driverId}
          >{`${driver.givenName} ${driver.familyName} - ${driver.numberOfPoles}`}</ListItem>
        ))}
      </List>
    </Container>
  );
}

export default DriverPolesList;
