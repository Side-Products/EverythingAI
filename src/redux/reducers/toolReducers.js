import {
	CREATE_TOOL_REQUEST,
	CREATE_TOOL_SUCCESS,
	CREATE_TOOL_FAIL,
	GET_TOOLS_REQUEST,
	GET_TOOLS_SUCCESS,
	GET_TOOLS_FAIL,
	UPDATE_TOOL_REQUEST,
	UPDATE_TOOL_SUCCESS,
	UPDATE_TOOL_RESET,
	UPDATE_TOOL_FAIL,
	DELETE_TOOL_REQUEST,
	DELETE_TOOL_SUCCESS,
	DELETE_TOOL_RESET,
	DELETE_TOOL_FAIL,
	GET_TOOL_REQUEST,
	GET_TOOL_SUCCESS,
	GET_TOOL_FAIL,
	CLEAR_ERRORS,
} from "../constants/toolConstants";

// create tool reducer
export const createToolReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_TOOL_REQUEST:
			return {
				loading: true,
			};
		case CREATE_TOOL_SUCCESS:
			return {
				loading: false,
				success: true,
				tool: action.payload.tool,
			};
		case CREATE_TOOL_FAIL:
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

// get all tools reducer
export const getAllToolsReducer = (state = { tools: [] }, action) => {
	switch (action.type) {
		case GET_TOOLS_REQUEST:
			return {
				loading: true,
			};
		case GET_TOOLS_SUCCESS:
			return {
				loading: false,
				tools: action.payload.tools,
				toolsCount: action.payload.toolsCount,
			};
		case GET_TOOLS_FAIL:
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

// update tool reducer
export const updateToolReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_TOOL_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_TOOL_SUCCESS:
			return {
				loading: false,
				isUpdated: action.payload,
			};
		case UPDATE_TOOL_RESET:
			return {
				loading: false,
				isUpdated: false,
			};
		case UPDATE_TOOL_FAIL:
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

// delete tool reducer
export const deleteToolReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_TOOL_REQUEST:
			return {
				loading: true,
			};
		case DELETE_TOOL_SUCCESS:
			return {
				loading: false,
				isDeleted: action.payload,
			};
		case DELETE_TOOL_RESET:
			return {
				loading: false,
				isDeleted: false,
			};
		case DELETE_TOOL_FAIL:
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

// get tool reducer
export const getToolReducer = (state = { tool: {} }, action) => {
	switch (action.type) {
		case GET_TOOL_REQUEST:
			return {
				loading: true,
			};
		case GET_TOOL_SUCCESS:
			return {
				loading: false,
				tool: action.payload.tool,
			};
		case GET_TOOL_FAIL:
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
