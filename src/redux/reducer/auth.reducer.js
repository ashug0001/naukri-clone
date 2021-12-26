import { authTypes } from "../types";

const auth = (
  state = {
    user: null,
    error: null,
    reset: null,
  },
  action
) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case authTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reset: action.payload,
      };

    case authTypes.LOGIN_FAILURE:
    case authTypes.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
