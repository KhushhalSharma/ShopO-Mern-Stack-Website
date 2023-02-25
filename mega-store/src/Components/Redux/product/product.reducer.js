import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.actionTypes";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_PRODUCT_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_PRODUCT_SUCCESS: {
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
