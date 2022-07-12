import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import DriverPolesList from "../../components/qualifying/driver-poles-list";
import {
  getListOfSeasons,
  getYearRaceResults,
} from "../../services/api-service";

import { IRaceSeason } from "../../interfaces";
import SeasonResult from "../../components/season-result";

interface IProps {
  listOfSeasons: Array<string>;
  seasonResults: IRaceSeason;
}

function RacePage({ listOfSeasons = [], seasonResults }: IProps) {
  const [selectedSeason, setSelectedSeason] = useState<string>(
    listOfSeasons[listOfSeasons.length - 1]
  );
  const [selectedSeasonResults, setSelectedSeasonResults] =
    useState<IRaceSeason>(() => seasonResults);

  const fetchNewSeason = useCallback(async () => {
    const seasonResults: IRaceSeason = await getYearRaceResults(selectedSeason);
    setSelectedSeasonResults(seasonResults);
  }, [selectedSeason]);

  useEffect(() => {
    fetchNewSeason();
  }, [fetchNewSeason]);

  return (
    <Box>
      <Box bg="black" p="24px" color="white">
        <Container>
          <Heading as="h1">Race results: {seasonResults.year}</Heading>
        </Container>
      </Box>
      <Grid
        templateRows={"1fr"}
        templateColumns="repeat(5, 1fr)"
        gap={2}
        p="8px"
      >
        <GridItem rowSpan={2} colSpan={{ sm: 5, md: 1 }}>
          <Box borderWidth="1px" borderRadius="lg">
            <Text>Haaaah yeah</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={{ sm: 5, md: 4 }}>
          <SeasonResult type="race" season={selectedSeasonResults} />
        </GridItem>
      </Grid>
      <Flex>
        <Menu preventOverflow boundary="scrollParent">
          <MenuButton as={Button}>{selectedSeason}</MenuButton>
          <MenuList height="300px" overflow="scroll">
            {listOfSeasons.map((season) => (
              <MenuItem key={season} onClick={() => setSelectedSeason(season)}>
                {season}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { year } = query;

  const season = year || "current";
  const listOfSeasons = await getListOfSeasons();
  const seasonResults = await getYearRaceResults(season);

  return {
    props: {
      seasonResults,
      listOfSeasons,
    },
  };
};

export default RacePage;
