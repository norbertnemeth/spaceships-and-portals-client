import { createAction, handleActions } from "redux-actions";
import initialState from "./initial.state";

/**
 * ACTION TYPES
 */

export const WITHOUT_PARAM = "WITHOUT_PARAM";
export const ONE_PARAM = "ONE_PARAM";
export const MORE_PARAM = "MORE_PARAM";

export const SET_ID = "SET_ID";

/**
 * ACTION CREATORS
 */

export const startWithoutparam = createAction(WITHOUT_PARAM);
export const startOneParam = createAction(
  ONE_PARAM,
  one => one
);
export const startMoreParam = createAction(
  MORE_PARAM,
  (two, three) => ({ two, three })
);

export const setId = createAction(
  SET_ID,
  id => id
);


/**
 * SELECTORS
 */

export const getGameId = state => state.main.id;

/**
 * REDUCERS
 */

export default handleActions(
  {
    [startOneParam]: (state, { payload: one }) => {
      return { ...state, one };
    },
    [startWithoutparam]: state => {
      return { ...state, zero: 0 };
    },
    [startMoreParam]: (state, { payload: { two, three } }) => {
      return { ...state, two, three };
    },
    [setId]: (state, { payload: id }) => ({ ...state, id })
  },
  initialState
);

/**
 * HELPERS
 */
