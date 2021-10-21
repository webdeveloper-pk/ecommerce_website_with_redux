import products from "./products";
import productDetails from "./productDetails";

import categories from "./categories.js";
import specificCategory from "./specificCategory";

import cartToggle from "./cartToggle.js";
import cartReducer from "./cartReducer.js";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products,
  productDetails,
  categories,
  specificCategory,
  cartToggle,
  cartReducer,
});

export default rootReducer;
