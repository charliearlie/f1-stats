import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";

export default function ExperimentalPage({}) {}

export const getServerSideProps: GetServerSideProps<{}> = async ({ query }) => {
  if (!process.env.EXPERIMENT_API) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  return {
    props: {
      data: "",
    },
  };
};
