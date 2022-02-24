import { useRouter } from "next/router";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Select } from "@chakra-ui/react";
import ApiHoc from "../../components/hoc/api-hoc";
import {
  getListOfSeasons,
  getSeasonQualifyingPoles,
} from "../../actions/qualifying-actions";
import { getCircuitSeasonQualifyingResults } from "../../actions/circuit-actions";
function CircuitPage(props) {
  const router = useRouter();

  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCircuitSeasonQualifyingResults(id));
    dispatch(getListOfSeasons());
  }, []);

  const circuit = useSelector((state) => state.circuit);
  console.log(circuit);
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

export default CircuitPage;
