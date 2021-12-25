import { userTypes } from "../types";

const login = () => async (dispatch) => {
  dispatch({ type: userTypes.LOGIN });
};

export default {
  login,
};
