import Image from "next/image";
import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import countryCodeMap, { ICountryCodeMap } from "../../util/country-code-map";
import { getRaceWeekendDates } from "../../services/date-service";
import { IQualiSeason } from "../../interfaces";

interface IProps {
  qualiSeason: IQualiSeason;
}

function SeasonResult({ qualiSeason }: IProps) {
  console.log(qualiSeason);
  return (
    <Box>
      {qualiSeason.results.map((result) => (
        <Box
          key={result.raceName}
          p="8px"
          borderWidth="1px"
          mt="8px"
          borderRadius="8px"
        >
          <Flex gap={8} alignItems="center">
            <Image
              style={{ borderRadius: "3px" }}
              width="80"
              height="55"
              objectFit="fill"
              src={`https://flagcdn.com/h80/${
                countryCodeMap[result.country as keyof ICountryCodeMap]
              }.png`}
              alt={result.country}
            />
            <Stack spacing="0">
              <Heading as="h3" size="lg">
                {result.raceName}
              </Heading>
              <Text>{result.circuit.name}</Text>
              <Text>{getRaceWeekendDates(result.date)}</Text>
            </Stack>
            <Text>
              Pole: {result.fastestLap.Driver.givenName}{" "}
              {result.fastestLap.Driver.familyName} - {result.fastestLap.Q3}
            </Text>
          </Flex>
        </Box>
      ))}
    </Box>
  );
}

export default SeasonResult;
