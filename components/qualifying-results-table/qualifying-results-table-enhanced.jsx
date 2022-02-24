import { connect } from "react-redux";

import QualifyingResultsTable from "./qualifying-results-table";
import ApiHoc from "../hoc/api-hoc";
import { getSeasonQualifyingResults } from "../../actions/qualifying-actions";

const mapStateToProps = (state) => {
  return {
    qualifying: state.qualifying,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLoad: () => {
      dispatch(getSeasonQualifyingResults());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiHoc(QualifyingResultsTable));
