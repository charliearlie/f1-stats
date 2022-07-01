import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";

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
      <Heading as="h3" size="md">
        Pole sitters leaderboard
      </Heading>
      <List>
        {driverPolesForASeason.map((driver) => (
          <ListItem pt="8px" key={driver.driverId}>
            <Link href={`/driver/${driver.driverId}`} passHref>
              <a>
                <Box>
                  <Flex justifyContent="space-between" alignItems="center">
                    <Stack spacing="0">
                      <Text fontWeight="bold">{`${driver.givenName} ${driver.familyName}`}</Text>
                      <Text mt="0">{driver.constructor.name}</Text>
                    </Stack>
                    <Text fontWeight="bold" fontSize="xl">
                      {driver.numberOfPoles}
                    </Text>
                  </Flex>
                </Box>
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default DriverPolesList;
