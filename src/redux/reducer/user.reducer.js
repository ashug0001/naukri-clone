import { userTypes } from "../types";

const user = (
  state = {
    error: null,
  },
  action
) => {
  switch (action.type) {
    case userTypes.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case userTypes.LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default user;
