import {
  GET_PURCHASE_TERMS_REQUEST,
  GET_PURCHASE_TERMS_SUCCESS,
  GET_PURCHASE_TERMS_FAIL,
  CREATE_PURCHASE_TERMS_REQUEST,
  CREATE_PURCHASE_TERMS_SUCCESS,
  CREATE_PURCHASE_TERMS_FAIL,
  UPDATE_PURCHASE_TERMS_REQUEST,
  UPDATE_PURCHASE_TERMS_SUCCESS,
  UPDATE_PURCHASE_TERMS_FAIL,
} from "../constants/purchaseTermsConstants";
import { CLEAR_ERRORS } from "../constants/userConstants";

export const getPurchaseTermsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PURCHASE_TERMS_REQUEST:
      return {
        loading: true,
      };
    case GET_PURCHASE_TERMS_SUCCESS:
      return {
        loading: false,
        success: true,
        purchaseTerms: action.payload.purchaseTerms,
      };
    case GET_PURCHASE_TERMS_FAIL:
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

export const getPurchaseTermsByToolSlugReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PURCHASE_TERMS_REQUEST:
      return {
        loading: true,
      };
    case GET_PURCHASE_TERMS_SUCCESS:
      return {
        loading: false,
        success: true,
        purchaseTerms: action.payload.purchaseTerms,
      };
    case GET_PURCHASE_TERMS_FAIL:
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

export const createPurchaseTermsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_PURCHASE_TERMS_REQUEST:
      return {
        loading: true,
      };
    case CREATE_PURCHASE_TERMS_SUCCESS:
      return {
        loading: false,
        success: true,
        purchaseTerms: action.payload.purchaseTerms,
      };
    case CREATE_PURCHASE_TERMS_FAIL:
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

export const updatePurchaseTermsReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PURCHASE_TERMS_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_PURCHASE_TERMS_SUCCESS:
      return {
        loading: false,
        success: true,
        purchaseTerms: action.payload.purchaseTerms,
      };
    case UPDATE_PURCHASE_TERMS_FAIL:
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
