import { productApi } from "../services/productsApi";

const prodObj = new productApi();

const fetchAllCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  try {
    const categoriesData = await prodObj.getAllCategories();
    dispatch({ type: "FETCH_CATEGORIES_SUCCESS", payload: categoriesData });
  } catch (error) {
    dispatch({ type: "FETCH_CATEGORIES_FAILURE", payload: error });
  }
};

const requestCategories = () => {
  return {
    type: "FETCH_CATEGORIES_REQUEST",
  };
};

const fetchSpecificCategory = (category) => async (dispatch) => {
  dispatch(requestSpecificCategory());
  try {
    const categoryData = await prodObj.getSpecificCategory(category);
    dispatch({
      type: "FETCH_SPECIFICCATEGORIES_SUCCESS",
      payload: categoryData,
    });
  } catch (error) {
    dispatch({ type: "FETCH_SPECIFICCATEGORIES_FAILURE", payload: error });
  }
};

const requestSpecificCategory = () => {
  return {
    type: "FETCH_SPECIFICCATEGORIES_REQUEST",
  };
};

// eslint-disable-next-line
export default {
  fetchAllCategories,
  fetchSpecificCategory,
};
