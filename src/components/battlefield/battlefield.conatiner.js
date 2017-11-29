import { connect } from "react-redux";
import Battlefield from "./battlefield.component";
import {
  setTable,
  getTable,
  getYouTurn,
  getTableSize,
  getPlayerPositionsWithData,
  updateTable
} from "../../state/battlefield";
import {
  getOwnId,
  getGameId
} from "../../state/main";

const mapStateToProps = state => ({
  table: getTable(state),
  tableSize: getTableSize(state),
  playerPositionsWithData: getPlayerPositionsWithData(state),
  youTurn: getYouTurn(state),
  ownId: getOwnId(state),
  gameId: getGameId(state)
});

const mapDispatchToProps = {
  setTable,
  updateTable
};

export default connect(mapStateToProps, mapDispatchToProps)(Battlefield);
