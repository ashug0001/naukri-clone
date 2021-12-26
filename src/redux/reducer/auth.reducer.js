import { authTypes } from "../types";

const user = JSON.parse(localStorage.getItem("user"));

const INITIAL_STATE = {
  user,
  error: null,
  reset: null,
};

const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authTypes.LOGIN_SUCCESS:
    case authTypes.RESET_PASSWORD_SUCCESS:
    case authTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case authTypes.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        reset: action.payload,
      };

    case authTypes.LOGOUT:
      return { ...INITIAL_STATE, user: null };

    case authTypes.LOGIN_FAILURE:
    case authTypes.FORGOT_PASSWORD_FAILURE:
    case authTypes.RESET_PASSWORD_FAILURE:
    case authTypes.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
