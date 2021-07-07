import { CHANGE_MODE, CHANGE_MODE_DARK } from "../actions";

export const initialState = {
  modeJDR: false,
  modeDark: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        modeJDR: !state.modeJDR,
      }
    case CHANGE_MODE_DARK:
      return {
        ...state,
        modeDark: !state.modeDark,
      }
    default:
      return state;
  }
};

export default reducer;