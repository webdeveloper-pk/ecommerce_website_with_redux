const toggleCartHidden = () => async (dispatch) => {
  dispatch(requestProducts());
  try {
    dispatch({ type: "TOGGLE_CART_HIDDEN_SUCCESS" });
  } catch (error) {
    dispatch({ type: "TOGGLE_CART_HIDDEN_FAILURE", payload: error });
  }
};

const requestProducts = () => {
  return {
    type: "TOGGLE_CART_HIDDEN_REQUEST",
  };
};

const addItemToCart = (cartItem) => async (dispatch) => {
  try {
    dispatch({ type: "ADD_CART_ITEM_SUCCESS", payload: cartItem });
  } catch (error) {
    dispatch({ type: "ADD_CART_ITEM_FAILURE", payload: error });
  }
};

const delItemFromCart = (cartItem) => async (dispatch) => {
  try {
    dispatch({ type: "DEL_CART_ITEM_SUCCESS", payload: cartItem });
  } catch (error) {
    dispatch({ type: "DEL_CART_ITEM_FAILURE", payload: error });
  }
};

const emptyCart = () => async (dispatch) => {
  try {
    dispatch({ type: "EMPTY_CART_SUCCESS" });
  } catch (error) {
    dispatch({ type: "EMPTY_CART_FAILURE", payload: error });
  }
};

// eslint-disable-next-line
export default {
  toggleCartHidden,
  addItemToCart,
  delItemFromCart,
  emptyCart,
};
