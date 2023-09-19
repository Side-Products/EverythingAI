import axios from "axios";
import {
  GET_SUBCATEGORIES_REQUEST,
  GET_SUBCATEGORIES_SUCCESS,
  GET_SUBCATEGORIES_FAIL,
  CLEAR_ERRORS,
} from "../constants/subCategoryConstants";

// get all sub-categories
export const getAllSubCategories = (limit) => async (dispatch) => {
  try {
    dispatch({ type: GET_SUBCATEGORIES_REQUEST });

    if (limit) {
      const { data } = await axios.get(`/api/sub-categories`, {
        params: {
          limit: limit,
        },
      });
      dispatch({ type: GET_SUBCATEGORIES_SUCCESS, payload: data });
    } else {
      const { data } = await axios.get(`/api/sub-categories`);

      dispatch({ type: GET_SUBCATEGORIES_SUCCESS, payload: data });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SUBCATEGORIES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
