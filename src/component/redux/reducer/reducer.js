import { combineReducers } from "redux";
import { cartReducer } from "../reducer/cartreducer";
export let rootReducer = combineReducers({
  cart: cartReducer,
});
