const initialState = {
  productDetails: {},
  loading: false,
  error: null,
};

const productDetails = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTSDETAILS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCTSDETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        productDetails: action.payload,
      };
    case "FETCH_PRODUCTSDETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productDetails;
