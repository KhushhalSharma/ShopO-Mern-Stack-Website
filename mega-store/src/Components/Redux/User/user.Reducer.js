import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./user.actiontypes";

const userInfo = localStorage.getItem("userId")
  ? JSON.parse(localStorage.getItem("userId"))
  : null;

const initialState = {
  loading: false,
  error: false,
  userInfo: { userInfo },
};

export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    }

    case USER_LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};
