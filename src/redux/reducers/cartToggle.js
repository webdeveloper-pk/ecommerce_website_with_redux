const initialState = {
  hidden: true,
  loading: false,
  error: null,
};

const cartToggle = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CARTITEMS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "TOGGLE_CART_HIDDEN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "TOGGLE_CART_HIDDEN_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

export default cartToggle;
