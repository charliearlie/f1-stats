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
  getYearQualifyingResults,
} from "../../services/api-service";

import { IQualiSeason } from "../../interfaces";
import SeasonResult from "../../components/qualifying/season-result";

interface IProps {
  listOfSeasons: Array<string>;
  seasonResults: IQualiSeason;
}

function QualifyingPage({ listOfSeasons = [], seasonResults }: IProps) {
  const [selectedSeason, setSelectedSeason] = useState<string>(
    listOfSeasons[listOfSeasons.length - 1]
  );
  const [selectedSeasonResults, setSelectedSeasonResults] =
    useState<IQualiSeason>(() => seasonResults);

  const fetchNewSeason = useCallback(async () => {
    const seasonResults: IQualiSeason = await getYearQualifyingResults(
      selectedSeason
    );
    setSelectedSeasonResults(seasonResults);
  }, [selectedSeason]);

  useEffect(() => {
    fetchNewSeason();
  }, [fetchNewSeason]);

  return (
    <Box>
      <Box bg="black" p="24px" color="white">
        <Container>
          <Heading as="h1">Qualifying results: {seasonResults.year}</Heading>
          <Text color="gray.300">
            (We only have full quali data from 2004 onwards)
          </Text>
        </Container>
      </Box>
      <Grid templateRows={"1fr"} templateColumns="repeat(5, 1fr)" gap={2}>
        <GridItem rowSpan={2} colSpan={{ sm: 5, md: 1 }} bg="tomato">
          <DriverPolesList qualiSeason={selectedSeasonResults} />
        </GridItem>
        <GridItem colSpan={{ sm: 5, md: 4 }} bg="papayawhip">
          <SeasonResult qualiSeason={selectedSeasonResults} />
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
  const seasonResults = await getYearQualifyingResults(season);

  return {
    props: {
      seasonResults,
      listOfSeasons,
    },
  };
};

export default QualifyingPage;
