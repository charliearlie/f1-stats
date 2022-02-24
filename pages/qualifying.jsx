import { connect } from "react-redux";
import { Select } from "@chakra-ui/react";
import ApiHoc from "../components/hoc/api-hoc";
import {
  getListOfSeasons,
  getSeasonQualifyingResults,
} from "../actions/qualifying-actions";
function Qualifying(props) {
    console.log(props.qualifying.seasons);
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
        <code>{JSON.stringify(props.qualifying)}</code>
      </div>
      <Select placeholder="Select season">
        {props.qualifying.seasons.length > 0 && props.qualifying.seasons.map((season => (
            <option key={season} value={season}>{season}</option>
        )))}
      </Select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    qualifying: state.qualifying,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(getSeasonQualifyingResults());
      dispatch(getListOfSeasons());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApiHoc(Qualifying));
