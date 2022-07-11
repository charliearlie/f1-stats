import { GetServerSideProps } from "next";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
  Badge,
  Box,
  Stack,
} from "@chakra-ui/react";

import { getRoundQualifyingResult } from "../../services/api-service";
import constructorColourMap, {
  IConstructorColour,
} from "../../util/constructor-colour-map";

import { IQualiResult } from "../../interfaces";

interface IProps {
  roundData: IQualiResult;
}

function QualifyingRoundPage({ roundData }: IProps) {
  return (
    <Box>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Pos</Th>
              <Th>No.</Th>
              <Th>Name</Th>
              <Th>Team</Th>
              <Th>Timings</Th>
            </Tr>
          </Thead>
          <Tbody>
            {roundData.results.map((result) => (
              <Tr key={result.position}>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                    {result.position}
                  </Text>
                </Td>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                    {result.driverNumber}
                  </Text>
                </Td>
                <Td>
                  <Text fontSize="2xl" fontWeight="bold">
                    {result.driver}
                  </Text>
                </Td>
                <Td>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    p={2}
                    style={{
                      borderLeft: `5px solid ${
                        constructorColourMap[
                          result.constructorId as keyof IConstructorColour
                        ]
                      }`,
                    }}
                  >
                    {result.constructor}
                  </Text>
                </Td>
                <Td>
                  <div>
                    <Badge borderRadius={3} minW={65} textAlign="center">
                      {result.qualifyingTime}
                    </Badge>
                  </div>
                  <div>
                    {result.delta && (
                      <Badge
                        borderRadius={3}
                        minW={65}
                        textAlign="center"
                        colorScheme="red"
                      >
                        +{result.delta}
                      </Badge>
                    )}
                  </div>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  // @ts-ignore
  const [year, round] = query.round;

  const roundData = await getRoundQualifyingResult(round, year);

  return {
    props: {
      roundData,
    },
  };
};

export default QualifyingRoundPage;
