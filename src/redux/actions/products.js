import { productApi } from "../services/productsApi";

const prodObj = new productApi();

const fetchAllProducts = () => async (dispatch) => {
  dispatch(requestProducts());
  try {
    const productData = await prodObj.getAllProducts();
    /* const = await response.json(); */
    dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: productData });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: error });
  }
};

const requestProducts = () => {
  return {
    type: "FETCH_PRODUCTS_REQUEST",
  };
};

const fetchProductDetails = (id) => async (dispatch) => {
  try {
    const productDetailsData = await prodObj.getProductDetails(id);
    dispatch({
      type: "FETCH_PRODUCTSDETAILS_SUCCESS",
      payload: productDetailsData,
    });
  } catch (error) {
    dispatch({ type: "FETCH_PRODUCTSDETAILS_FAILURE", payload: error });
  }
};

// eslint-disable-next-line
export default {
  fetchAllProducts,
  fetchProductDetails,
};
