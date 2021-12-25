import { userTypes } from "../types";
import http from "../../utils/http";

const login = (user) => async (dispatch) => {
  try {
    const response = await http.post("/auth/login", { ...user });
    localStorage.setItem("user", JSON.stringify(response.data.data));
    dispatch({ type: userTypes.LOGIN_SUCCESS, payload: response.data.data });
  } catch (error) {
    const payload = error?.response?.data;
    dispatch({ type: userTypes.LOGIN_FAILURE, payload });
    throw new Error();
  }
};

export default {
  login,
};
