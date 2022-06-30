import { Box, Container } from "@chakra-ui/react";

import { IQualiSeason } from "../../interfaces";

interface IProps {
  qualiSeason: IQualiSeason;
}

function SeasonResult({ qualiSeason }: IProps) {
  return (
    <Container>
      {qualiSeason.results.map((result) => (
        <>
          <h2>{result.raceName}</h2>
          <p>{result.fastestLap.Driver.familyName}</p>
        </>
      ))}
    </Container>
  );
}

export default SeasonResult;
