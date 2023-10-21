import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
  CREATE_COLLECTION_REQUEST,
  CREATE_COLLECTION_SUCCESS,
  CREATE_COLLECTION_FAIL,
  GET_COLLECTIONS_REQUEST,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAIL,
  UPDATE_COLLECTION_REQUEST,
  UPDATE_COLLECTION_SUCCESS,
  UPDATE_COLLECTION_RESET,
  UPDATE_COLLECTION_FAIL,
  DELETE_COLLECTION_REQUEST,
  DELETE_COLLECTION_SUCCESS,
  DELETE_COLLECTION_RESET,
  DELETE_COLLECTION_FAIL,
  GET_COLLECTION_REQUEST,
  GET_COLLECTION_SUCCESS,
  GET_COLLECTION_FAIL,
  ADD_TOOL_TO_COLLECTION_REQUEST,
  ADD_TOOL_TO_COLLECTION_SUCCESS,
  ADD_TOOL_TO_COLLECTION_FAIL,
  REMOVE_TOOL_FROM_COLLECTION_REQUEST,
  REMOVE_TOOL_FROM_COLLECTION_SUCCESS,
  REMOVE_TOOL_FROM_COLLECTION_FAIL,
  REMOVE_TOOL_FROM_COLLECTION_RESET,
  CLEAR_ERRORS,
} from "../constants/collectionConstants";

// create collection
export const createCollection = (collectionData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COLLECTION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/collections`,
      collectionData,
      config
    );

    dispatch({ type: CREATE_COLLECTION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_COLLECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all collections
export const getAllCollections = (limit) => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLECTIONS_REQUEST });

    if (limit) {
      const { data } = await axios.get(`/api/collections`, {
        params: {
          limit: limit,
        },
      });
      dispatch({ type: GET_COLLECTIONS_SUCCESS, payload: data });
    } else {
      const { data } = await axios.get(`/api/collections`);

      dispatch({ type: GET_COLLECTIONS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: GET_COLLECTIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get all collections
export const getAllCollectionsServerSide = (req, limit) => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLECTIONS_REQUEST });

    const { origin } = absoluteUrl(req);
    if (limit) {
      const { data } = await axios.get(`${origin}/api/collections`, {
        params: {
          limit: limit,
        },
      });
      dispatch({ type: GET_COLLECTIONS_SUCCESS, payload: data });
    } else {
      const { data } = await axios.get(`${origin}/api/collections`);

      dispatch({ type: GET_COLLECTIONS_SUCCESS, payload: data });
    }
  } catch (error) {
    dispatch({
      type: GET_COLLECTIONS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// update collection
export const updateCollection = (id, collectionData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_COLLECTION_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `/api/collections/${id}`,
      collectionData,
      config
    );

    dispatch({ type: UPDATE_COLLECTION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: UPDATE_COLLECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// delete collection
export const deleteCollection = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COLLECTION_REQUEST });

    const { data } = await axios.delete(`/api/collections/${id}`);

    dispatch({ type: DELETE_COLLECTION_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_COLLECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// get collection
export const getCollectionBySlug = (req, slug) => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLECTION_REQUEST });

    const { origin } = absoluteUrl(req);
    const config = {
      headers: {
        cookie: req.headers.cookie,
      },
    };
    const { data } = await axios.get(
      `${origin}/api/collections/find/${slug}`,
      config
    );

    dispatch({
      type: GET_COLLECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_COLLECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const adminGetAllCollections = (req) => async (dispatch) => {
  try {
    dispatch({ type: GET_COLLECTIONS_REQUEST });

    const { origin } = absoluteUrl(req);
    const config = {
      headers: {
        cookie: req.headers.cookie,
      },
    };
    const { data } = await axios.get(`${origin}/api/collections`, config);

    dispatch({ type: GET_COLLECTIONS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_COLLECTIONS_FAIL,
      payload: error?.response.data.message,
    });
  }
};

export const addToolToCollection = (id, toolId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_TOOL_TO_COLLECTION_REQUEST });

    const { data } = await axios.post(`/api/collections/${id}/add-tool`, {
      toolId,
    });

    dispatch({ type: ADD_TOOL_TO_COLLECTION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADD_TOOL_TO_COLLECTION_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const removeToolFromCollection = (id, toolId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_TOOL_FROM_COLLECTION_REQUEST });

    const { data } = await axios.post(`/api/collections/${id}/remove-tool`, {
      toolId,
    });

    dispatch({ type: REMOVE_TOOL_FROM_COLLECTION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: REMOVE_TOOL_FROM_COLLECTION_FAIL,
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
