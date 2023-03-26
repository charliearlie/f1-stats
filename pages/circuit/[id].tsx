import { GetServerSideProps, GetStaticProps, NextPageContext } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

function CircuitPage({ circuitId }: { circuitId: number }) {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Seasons</h2>
        <code>{JSON.stringify(circuitId)}</code>
      </div>
    </div>
  );
}

export const getServersideProps: GetServerSideProps<{
  circuitId: string;
}> = async (context) => {
  return { props: { circuitId: context.query.id as string } };
};

CircuitPage.getInitialProps = async (ctx: NextPageContext) => {
  return { circuitId: ctx.query.id };
};

export default CircuitPage;
