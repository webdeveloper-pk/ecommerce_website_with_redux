import { addItemToCart, removeItemFromCart } from "../services/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  subTotal: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        subTotal: state.subTotal + parseInt(action.payload.price),
        loading: false,
      };
    case "ADD_CART_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "DEL_CART_ITEM_SUCCESS":
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        subTotal: state.subTotal - parseInt(action.payload.price),
        loading: false,
      };
    case "DEL_CART_ITEM_FAILURE":
      return {
        ...state,
        loading: false,
      };
    case "EMPTY_CART_SUCCESS":
      return {
        cartItems: [],
        loading: false,
      };
    case "EMPTY_CART_FAILURE":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default cartReducer;
