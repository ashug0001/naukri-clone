import { authTypes } from "../types";
import http from "../../utils/http";

const login = (user) => async (dispatch) => {
  try {
    const response = await http.post("/auth/login", { ...user });
    localStorage.setItem("user", JSON.stringify(response.data.data));
    dispatch({ type: authTypes.LOGIN_SUCCESS, payload: response.data.data });
  } catch (error) {
    const payload = error?.response?.data;
    dispatch({ type: authTypes.LOGIN_FAILURE, payload });
    throw new Error();
  }
};

const forgotPassword =
  ({ email }) =>
  async (dispatch) => {
    try {
      const response = await http.get("/auth/resetpassword", {
        params: { email },
      });
      dispatch({
        type: authTypes.FORGOT_PASSWORD_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      const payload = error?.response?.data;
      dispatch({ type: authTypes.FORGOT_PASSWORD_FAILURE, payload });
      throw new Error();
    }
  };

const resetPassword = (body) => async (dispatch) => {
  try {
    const response = await http.post("/auth/resetpassword", { ...body });
    localStorage.setItem("user", JSON.stringify(response.data.data));
    dispatch({
      type: authTypes.RESET_PASSWORD_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    const payload = error?.response?.data;
    dispatch({ type: authTypes.RESET_PASSWORD_FAILURE, payload });
    throw new Error();
  }
};

const signUp = (body) => async (dispatch) => {
  try {
    const response = await http.post("/auth/register", { ...body });
    localStorage.setItem("user", JSON.stringify(response.data.data));
    dispatch({
      type: authTypes.SIGNUP_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    const payload = error?.response?.data;
    dispatch({ type: authTypes.SIGNUP_FAILURE, payload });
    throw new Error();
  }
};

export default {
  login,
  forgotPassword,
  resetPassword,
  signUp,
};
