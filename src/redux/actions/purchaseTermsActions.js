import axios from "axios";
import absoluteUrl from "next-absolute-url";

import {
  CLEAR_ERRORS,
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

// get purchase terms by id
export const getPurchaseTermsById =
  (req = "", id) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_PURCHASE_TERMS_REQUEST });
      const { origin } = absoluteUrl(req);
      const config = {
        headers: {
          cookie: req.headers.cookie,
        },
      };
      const { data } = await axios.get(
        `${origin}/api/purchase-terms/${id}`,
        config
      );

      dispatch({
        type: GET_PURCHASE_TERMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PURCHASE_TERMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// getPurchaseTermsByToolSlug
export const getPurchaseTermsByToolSlug = (req, slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_PURCHASE_TERMS_REQUEST });
    const { origin } = absoluteUrl(req);
    const config = {
      headers: {
        cookie: req.headers.cookie,
      },
    };
    const { data } = await axios.get(
      `${origin}/api/purchase-terms/slug/${slug}`
    );
    dispatch({
      type: GET_PURCHASE_TERMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PURCHASE_TERMS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// create purchase terms
export const createPurchaseTerms =
  (purchaseTermsData, id) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_PURCHASE_TERMS_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `/api/purchase-terms/${id}`,
        purchaseTermsData,
        config
      );
      dispatch({
        type: CREATE_PURCHASE_TERMS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PURCHASE_TERMS_FAIL,
        payload: error,
      });
    }
  };

// update purchase terms

export const updatePurchaseTerms =
  (purchaseTermsData, id) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_PURCHASE_TERMS_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `/api/purchase-terms/${id}`,
        purchaseTermsData,
        config
      );

      dispatch({ type: UPDATE_PURCHASE_TERMS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: UPDATE_PURCHASE_TERMS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
