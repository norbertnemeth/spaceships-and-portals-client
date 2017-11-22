import { createAction, handleActions } from "redux-actions";
import initialState from "./initial.state";

/**
 * ACTION TYPES
 */

export const SET_TABLE = "SET_TABLE";

/**
 * ACTION CREATORS
 */

export const setTable = createAction(
  SET_TABLE,
  tableInfos => tableInfos
);

/**
 * SELECTORS
 */

export const getTable = state => state.battlefield.table;
export const getTableSize = state => state.battlefield.tableSize;

/**
 * REDUCERS
 */

export default handleActions(
  {
    [setTable]: (state, { payload: { table, tableSize } }) => ({ ...state, table, tableSize })
  },
  initialState
);

/**
 * HELPERS
 */
