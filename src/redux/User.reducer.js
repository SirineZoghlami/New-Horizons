import axios from "../utils/axios";

// ############################################################################## Inits
// ############################################################################## Inits
const keys = {
  set_user: "set_user",
};

const InitialState = {
  user: null,
  payload: true,
};
// ############################################################################## Reducers
// ############################################################################## Reducers
const UserReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.set_user:
      return { ...state, user: action.value, payload: false };
    default:
      return state;
  }
};
// ############################################################################## Actions
// ############################################################################## Actions
const LoginUser = ({ data, callback = () => {} }) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/auth/login", data);
      const authToken = response.data.accessToken;
      localStorage.setItem("authToken", authToken);
      console.log(authToken);
      callback();
      dispatch(GetUserByToken());
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };
};

const GetUserByToken = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("/auth/test");
      dispatch({
        type: keys.set_user,
        value: response.data,
      });
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };
};

const DisconnectUser = () => {
  return async (dispatch) => {
    localStorage.removeItem("authToken");
    dispatch({
      type: keys.set_user,
      value: null,
    });
  };
};

export { UserReducer, InitialState, DisconnectUser, GetUserByToken, LoginUser };
