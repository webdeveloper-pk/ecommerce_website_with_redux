const initialState = {
  specificCategory: [],
  loading: false,
  error: null,
};

const specificCategory = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SPECIFICCATEGORIES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SPECIFICCATEGORIES_SUCCESS":
      return {
        ...state,
        loading: false,
        specificCategory: action.payload,
      };
    case "FETCH_SPECIFICCATEGORIES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default specificCategory;
