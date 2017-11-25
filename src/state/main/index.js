import { createAction, handleActions } from "redux-actions";
import initialState from "./initial.state";

/**
 * ACTION TYPES
 */

export const SET_IDS = "SET_IDS";

/**
 * ACTION CREATORS
 */

export const setIds = createAction(
  SET_IDS,
  ids => ids
);


/**
 * SELECTORS
 */

export const getGameId = state => state.main.gameId;
export const getOwnId = state => state.main.ownId;


/**
 * REDUCERS
 */

export default handleActions(
  {
    [setIds]: (state, { payload: { gameId, ownId } }) => ({ ...state, gameId, ownId })
  },
  initialState
);

/**
 * HELPERS
 */
