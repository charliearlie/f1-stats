import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Select } from "@chakra-ui/react";
import ApiHoc from "../components/hoc/api-hoc";
import {
  getListOfSeasons,
  getSeasonQualifyingPoles,
} from "../actions/qualifying-actions";
function Qualifying(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeasonQualifyingPoles());
    dispatch(getListOfSeasons());
  }, []);

  const qualifying = useSelector((state) => state.qualifying);
  console.log(qualifying.seasons);
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
        <code>{JSON.stringify(qualifying)}</code>
      </div>
      <Select placeholder="Select season">
        {qualifying.seasons.length > 0 &&
          qualifying.seasons.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
      </Select>
    </div>
  );
}

export default Qualifying;
