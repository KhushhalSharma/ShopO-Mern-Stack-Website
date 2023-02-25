import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionTypes";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
