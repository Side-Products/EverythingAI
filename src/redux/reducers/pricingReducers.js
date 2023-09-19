import {
  CREATE_PRICING_REQUEST,
  CREATE_PRICING_SUCCESS,
  CREATE_PRICING_FAIL,
  GET_PRICINGS_REQUEST,
  GET_PRICINGS_SUCCESS,
  GET_PRICINGS_FAIL,
  UPDATE_PRICING_REQUEST,
  UPDATE_PRICING_SUCCESS,
  UPDATE_PRICING_RESET,
  UPDATE_PRICING_FAIL,
  DELETE_PRICING_REQUEST,
  DELETE_PRICING_SUCCESS,
  DELETE_PRICING_RESET,
  DELETE_PRICING_FAIL,
  CLEAR_ERRORS,
} from "../constants/pricingConstants";

// create pricing reducer
export const createPricingReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PRICING_REQUEST:
      return {
        loading: true,
      };
    case CREATE_PRICING_SUCCESS:
      return {
        loading: false,
        success: true,
        pricing: action.payload.pricing,
      };
    case CREATE_PRICING_FAIL:
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

// get all pricings reducer
export const getAllPricingsReducer = (state = { pricings: [] }, action) => {
  switch (action.type) {
    case GET_PRICINGS_REQUEST:
      return {
        loading: true,
      };
    case GET_PRICINGS_SUCCESS:
      return {
        loading: false,
        pricings: action.payload.pricings,
      };
    case GET_PRICINGS_FAIL:
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

// update pricing reducer
export const updatePricingReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PRICING_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_PRICING_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_PRICING_RESET:
      return {
        loading: false,
        isUpdated: false,
      };
    case UPDATE_PRICING_FAIL:
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

// delete pricing reducer
export const deletePricingReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PRICING_REQUEST:
      return {
        loading: true,
      };
    case DELETE_PRICING_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_PRICING_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case DELETE_PRICING_FAIL:
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
