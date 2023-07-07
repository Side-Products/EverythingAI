import {
	CREATE_TOOL_REQUEST,
	CREATE_TOOL_SUCCESS,
	CREATE_TOOL_FAIL,
	GET_TOOLS_REQUEST,
	GET_TOOLS_SUCCESS,
	GET_TOOLS_FAIL,
	GET_TOOLS_FOR_HOMEPAGE_REQUEST,
	GET_TOOLS_FOR_HOMEPAGE_SUCCESS,
	GET_TOOLS_FOR_HOMEPAGE_FAIL,
	UPDATE_TOOL_REQUEST,
	UPDATE_TOOL_SUCCESS,
	UPDATE_TOOL_RESET,
	UPDATE_TOOL_FAIL,
	DELETE_TOOL_REQUEST,
	DELETE_TOOL_SUCCESS,
	DELETE_TOOL_RESET,
	DELETE_TOOL_FAIL,
	VERIFY_TOOL_REQUEST,
	VERIFY_TOOL_SUCCESS,
	VERIFY_TOOL_RESET,
	VERIFY_TOOL_FAIL,
	UNVERIFY_TOOL_REQUEST,
	UNVERIFY_TOOL_SUCCESS,
	UNVERIFY_TOOL_RESET,
	UNVERIFY_TOOL_FAIL,
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
				verifiedTools: action.payload.verifiedTools ?? [],
				unverifiedTools: action.payload.unverifiedTools ?? [],
				toolsCount: action.payload.toolsCount ?? null,
			};
		case GET_TOOLS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERRORS:
			return {
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};

// get tools for homepage reducer
export const getToolsForHomepageReducer = (state = { tools: [] }, action) => {
	switch (action.type) {
		case GET_TOOLS_FOR_HOMEPAGE_REQUEST:
			return {
				loading: true,
			};
		case GET_TOOLS_FOR_HOMEPAGE_SUCCESS:
			return {
				loading: false,
				marketingTools: action.payload.marketingTools,
				designTools: action.payload.designTools,
				developerTools: action.payload.developerTools,
				productivityTools: action.payload.productivityTools,
				imagesTools: action.payload.imagesTools,
				promptsTools: action.payload.promptsTools,
				videoTools: action.payload.videoTools,
				productTools: action.payload.productTools,
				salesTools: action.payload.salesTools,
			};
		case GET_TOOLS_FOR_HOMEPAGE_FAIL:
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

// verify tool reducer
export const verifyToolReducer = (state = {}, action) => {
	switch (action.type) {
		case VERIFY_TOOL_REQUEST:
			return {
				loading: true,
			};
		case VERIFY_TOOL_SUCCESS:
			return {
				loading: false,
				isVerified: action.payload,
			};
		case VERIFY_TOOL_RESET:
			return {
				loading: false,
				isVerified: false,
			};
		case VERIFY_TOOL_FAIL:
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

// unverify tool reducer
export const unverifyToolReducer = (state = {}, action) => {
	switch (action.type) {
		case UNVERIFY_TOOL_REQUEST:
			return {
				loading: true,
			};
		case UNVERIFY_TOOL_SUCCESS:
			return {
				loading: false,
				isUnverified: action.payload,
			};
		case UNVERIFY_TOOL_RESET:
			return {
				loading: false,
				isUnverified: false,
			};
		case UNVERIFY_TOOL_FAIL:
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
