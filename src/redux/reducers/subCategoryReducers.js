import {
  GET_SUBCATEGORIES_REQUEST,
  GET_SUBCATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_FAIL,
  CLEAR_ERRORS,
} from "../constants/subCategoryConstants";

// get all sub-categories reducer
export const getAllSubCategoriesReducer = (
  state = { subcategories: [] },
  action
) => {
  switch (action.type) {
    case GET_SUBCATEGORIES_REQUEST:
      return {
        loading: true,
      };
    case GET_SUBCATEGORIES_SUCCESS:
      return {
        loading: false,
        subcategories: action.payload.subcategories,
      };
    case GET_SUBCATEGORIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
