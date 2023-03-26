import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getRoundQualifyingResult } from "../../services/api-service";
import constructorColourMap, {
  IConstructorColour,
} from "../../lib/util/constructor-colour-map";

import { IQualiResult } from "../../interfaces";

type RequestData = {
  raceName?: string;
  circuit?: string;
  results?: IQualiResult[];
};

type Props = {
  data: RequestData;
};

function QualifyingRoundPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>Being rebuilt</div>;
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const [year, round] = query.round as string[];

  const roundData = await getRoundQualifyingResult(round, year);

  return {
    props: {
      data: {
        raceName: roundData.raceName,
        circuit: roundData.circuit,
        results: roundData.results,
      } as RequestData, // Hideous that I have to do this
    },
  };
};

export default QualifyingRoundPage;
