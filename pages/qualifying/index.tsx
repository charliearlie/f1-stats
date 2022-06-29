import { GetServerSideProps } from "next";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import DriverPolesList from "../../components/qualifying/driver-poles-list";
import {
  getListOfSeasons,
  getYearQualifyingResults,
} from "../../services/api-service";
import { getDriverPolesForASeason } from "../../services/quali-service";

function QualifyingPage({ listOfSeasons = [], seasonResults }) {
  const [selectedSeason, setSelectedSeason] = useState(listOfSeasons.slice(-1));
  const [selectedSeasonResults, setSelectedSeasonResults] = useState(
    () => seasonResults
  );
  const [driverPolesForASeason, setDriverPolesForASeason] = useState([]);

  const fetchNewSeason = useCallback(async () => {
    const seasonResults = await getYearQualifyingResults(selectedSeason);
    setSelectedSeasonResults(seasonResults);
  }, [selectedSeason]);

  useEffect(() => {
    fetchNewSeason();
  }, [fetchNewSeason]);

  useEffect(() => {
    const poles = getDriverPolesForASeason(selectedSeasonResults);
    setDriverPolesForASeason(poles);
  }, [selectedSeasonResults]);

  return (
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
      <DriverPolesList driverPoles={driverPolesForASeason} />
    </Flex>
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
