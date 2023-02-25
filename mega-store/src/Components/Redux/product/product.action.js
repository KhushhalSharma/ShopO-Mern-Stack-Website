import {
  GET_PRODUCT_ERROR,
  GET_PRODUCT_LOADING,
  GET_PRODUCT_SUCCESS,
} from "./product.actionTypes";
import axios from "axios";

export const getProducts =
  ({ page, limit, check }) =>
  async (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING });
    try {
      let res = await axios.get(
        `https://rich-pear-kangaroo-gear.cyclic.app/products?page=${page}&limit=${limit}&orderBy=price&order=${check}`
      );
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
      return res.data;
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR });
    }
  };
