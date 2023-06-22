import {
	CREATE_LIKED_TOOL_REQUEST,
	CREATE_LIKED_TOOL_SUCCESS,
	CREATE_LIKED_TOOL_FAIL,
	DELETE_LIKED_TOOL_REQUEST,
	DELETE_LIKED_TOOL_SUCCESS,
	DELETE_LIKED_TOOL_RESET,
	DELETE_LIKED_TOOL_FAIL,
	CLEAR_ERRORS,
} from "../constants/likedToolConstants";

// create liked tool reducer
export const createLikedToolReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_LIKED_TOOL_REQUEST:
			return {
				loading: true,
			};
		case CREATE_LIKED_TOOL_SUCCESS:
			return {
				loading: false,
				success: true,
				likedTool: action.payload.likedTool,
			};
		case CREATE_LIKED_TOOL_FAIL:
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

// delete liked tool reducer
export const deleteLikedToolReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_LIKED_TOOL_REQUEST:
			return {
				loading: true,
			};
		case DELETE_LIKED_TOOL_SUCCESS:
			return {
				loading: false,
				isDeleted: action.payload,
			};
		case DELETE_LIKED_TOOL_RESET:
			return {
				loading: false,
				isDeleted: false,
			};
		case DELETE_LIKED_TOOL_FAIL:
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
