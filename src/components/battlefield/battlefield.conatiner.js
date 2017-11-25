import { connect } from "react-redux";
import Battlefield from "./battlefield.component";
import {
  setTable,
  getTable,
  getYouTurn,
  getTableSize,
  getPlayerPositionsWithData
} from "../../state/battlefield";
import {
  getOwnId
} from "../../state/main";

const mapStateToProps = state => ({
  table: getTable(state),
  tableSize: getTableSize(state),
  playerPositionsWithData: getPlayerPositionsWithData(state),
  youTurn: getYouTurn(state),
  ownId: getOwnId(state)
});

const mapDispatchToProps = {
  setTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);
