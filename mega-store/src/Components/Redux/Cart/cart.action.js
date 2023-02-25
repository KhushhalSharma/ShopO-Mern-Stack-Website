import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_CART_ERROR,
  GET_CART_LOADING,
  GET_CART_SUCCESS,
} from "./cart.actionTypes";

export const getcart = (productId) => async (dispatch) => {
  const _productId = productId;
  console.log(_productId);
  const userId = JSON.parse(localStorage.getItem("userId"));
  console.log(userId);
  const _data = { productId: _productId, userId: userId };
  dispatch({ type: GET_CART_LOADING });
  try {
    let res = axios.post(
      "https://rich-pear-kangaroo-gear.cyclic.app/user/add-to-cart",
      _data
    );
    dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    toast.success("Product Added To Cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return res.data;
  } catch (error) {
    dispatch({ type: GET_CART_ERROR });
    console.log("error:", error);
  }
};
