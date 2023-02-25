import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import thunk from "redux-thunk";
import { cartReducer } from "./Cart/cartReducer";
import { productReducer } from "./product/product.reducer";
import { userLoginReducer } from "./User/user.Reducer";

const rootReducer = combineReducers({
  products: productReducer,
  userLogin: userLoginReducer,
  cart: cartReducer,
});

const creatComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  creatComposer(applyMiddleware(thunk))
);

export default store;
