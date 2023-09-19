import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAIL,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_RESET,
  UPDATE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_RESET,
  DELETE_CATEGORY_FAIL,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAIL,
  CLEAR_ERRORS,
} from "../constants/categoryConstants";

// create category reducer
export const createCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        loading: false,
        success: true,
        category: action.payload.category,
      };
    case CREATE_CATEGORY_FAIL:
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

// get all categories reducer
export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        loading: true,
      };
    case GET_CATEGORIES_SUCCESS:
      return {
        loading: false,
        categories: action.payload.categories,
        categoriesCount: action.payload.categoriesCount,
      };
    case GET_CATEGORIES_FAIL:
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

// update category reducer
export const updateCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_CATEGORY_RESET:
      return {
        loading: false,
        isUpdated: false,
      };
    case UPDATE_CATEGORY_FAIL:
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

// delete category reducer
export const deleteCategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CATEGORY_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case DELETE_CATEGORY_FAIL:
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

// get category reducer
export const getCategoryReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        loading: false,
        category: action.payload.category,
      };
    case GET_CATEGORY_FAIL:
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
