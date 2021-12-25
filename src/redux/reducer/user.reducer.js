import { userTypes } from "../types";

const user = (state = {}, action) => {
  switch (action.type) {
    case userTypes.LOGIN:
      console.log("User Reducer");
      return state;

    default:
      return state;
  }
};

export default user;
