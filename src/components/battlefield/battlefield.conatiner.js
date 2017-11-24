import { connect } from "react-redux";
import Battlefield from "./battlefield.component";
import { setTable, getTable, getTableSize } from "../../state/battlefield";

const mapStateToProps = state => ({
  table: getTable(state),
  tableSize: getTableSize(state)
});

const mapDispatchToProps = {
  setTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);
