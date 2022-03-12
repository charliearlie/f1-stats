import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Select } from "@chakra-ui/react";
import ApiHoc from "../../components/hoc/api-hoc";
import { getListOfSeasons } from "../../actions/qualifying-actions";
import {
  getCircuitInformation,
  getCircuitSeasonQualifyingResults,
} from "../../actions/circuit-actions";

function CircuitPage({ circuitId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCircuitInformation(circuitId));
    dispatch(getCircuitSeasonQualifyingResults(circuitId));
    dispatch(getListOfSeasons());
  }, []);

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
