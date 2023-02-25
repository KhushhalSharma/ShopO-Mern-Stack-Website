import axios from "axios";
import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./user.actiontypes";

export const UserLogin =
  (loginusername, loginemail, loginpassword) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "https://rich-pear-kangaroo-gear.cyclic.app/user/login",
        {
          username: loginusername,
          email: loginemail,
          password: loginpassword,
        },
        config
      );
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("userId", JSON.stringify(data._id));
      localStorage.setItem("roles", JSON.stringify(data.permission));
    } catch (error) {
      dispatch({ type: USER_LOGIN_ERROR });
    }
  };
