import { connect } from "react-redux";
import Battlefield from "./battlefield.component";
import { setTable, getTable } from "../../state/battlefield";

const mapStateToProps = state => ({
  table: getTable(state)
});

const mapDispatchToProps = {
  setTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);
