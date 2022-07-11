import { useRouter } from "next/router";
import { useEffect } from "react";
import { Select } from "@chakra-ui/react";

function CircuitPage({ circuitId }) {
  const circuit = useSelector((state) => state.circuit);
  return (
    <div>
      <div
        style={{
          maxWidth: "100%",
          maxHeight: "150px",
          overflow: "scroll",
          padding: "16px",
        }}
      >
        <h2 style={{ fontWeight: "bold", fontSize: "22px" }}>Seasons</h2>
        <code>{JSON.stringify(circuit)}</code>
      </div>
    </div>
  );
}

CircuitPage.getInitialProps = async (ctx) => {
  return { circuitId: ctx.query.id };
};

export default CircuitPage;
