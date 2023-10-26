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

// create collection reducer
export const createCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case CREATE_COLLECTION_SUCCESS:
      return {
        loading: false,
        success: true,
        collection: action.payload.collection,
      };
    case CREATE_COLLECTION_FAIL:
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

// get all collections reducer
export const getAllCollectionsReducer = (
  state = { collections: [] },
  action
) => {
  switch (action.type) {
    case GET_COLLECTIONS_REQUEST:
      return {
        loading: true,
      };
    case GET_COLLECTIONS_SUCCESS:
      return {
        loading: false,
        collections: action.payload.collections,
        collectionsCount: action.payload.collectionsCount,
      };
    case GET_COLLECTIONS_FAIL:
      return {
        loading: false,
        error: action.payload || "Something went wrong. Please try again.",
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

// update collection reducer
export const updateCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case UPDATE_COLLECTION_SUCCESS:
      return {
        loading: false,
        isUpdated: action.payload,
      };
    case UPDATE_COLLECTION_RESET:
      return {
        loading: false,
        isUpdated: false,
      };
    case UPDATE_COLLECTION_FAIL:
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

// delete collection reducer
export const deleteCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case DELETE_COLLECTION_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_COLLECTION_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case DELETE_COLLECTION_FAIL:
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

// get collection reducer
export const getCollectionReducer = (state = { collection: {} }, action) => {
  switch (action.type) {
    case GET_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case GET_COLLECTION_SUCCESS:
      return {
        loading: false,
        collection: action.payload.collection,
      };
    case GET_COLLECTION_FAIL:
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

// add tool to collection reducer
export const addToolToCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TOOL_TO_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case ADD_TOOL_TO_COLLECTION_SUCCESS:
      return {
        loading: false,
        success: true,
        collectionToolRelation: action.payload.collectionToolRelation,
      };
    case ADD_TOOL_TO_COLLECTION_FAIL:
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

// remove tool from collection reducer
export const removeToolFromCollectionReducer = (state = {}, action) => {
  switch (action.type) {
    case REMOVE_TOOL_FROM_COLLECTION_REQUEST:
      return {
        loading: true,
      };
    case REMOVE_TOOL_FROM_COLLECTION_SUCCESS:
      return {
        loading: false,
        isDeleted: action.payload,
      };
    case REMOVE_TOOL_FROM_COLLECTION_RESET:
      return {
        loading: false,
        isDeleted: false,
      };
    case REMOVE_TOOL_FROM_COLLECTION_FAIL:
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
