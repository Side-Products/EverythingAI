import axios from "axios";
import absoluteUrl from "next-absolute-url";
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

// create tool
export const createTool = (toolData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_TOOL_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/tools`, toolData, config);

		dispatch({ type: CREATE_TOOL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all tools
export const getAllTools = () => async (dispatch) => {
	try {
		dispatch({ type: GET_TOOLS_REQUEST });

		const { data } = await axios.get(`/api/tools`);

		dispatch({ type: GET_TOOLS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_TOOLS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all tools server side
export const getAllToolsServerSide = (req, type, query) => async (dispatch) => {
	try {
		dispatch({ type: GET_TOOLS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const params = {};
		if (type) {
			params.type = type;
		}
		if (query) {
			params.search = query.search;
			params.category = query.category;
			params.subcategories = query.subcategories;
			params.sortby = query.sortby;
			params.pricing = query.pricing;
			params.meta = query.meta;
		}
		// Remove null or undefined values from params
		Object.keys(params).forEach((key) => {
			if (params[key] === null || params[key] === undefined || params[key] === "") {
				delete params[key];
			}
		});
		const { data } = await axios.get(`${origin}/api/tools`, {
			params: params,
			headers: config.headers,
		});

		dispatch({ type: GET_TOOLS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_TOOLS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const getToolsForHomepage = () => async (dispatch) => {
	try {
		dispatch({ type: GET_TOOLS_FOR_HOMEPAGE_REQUEST });

		const { data } = await axios.get(`/api/tools/homepage`);

		dispatch({ type: GET_TOOLS_FOR_HOMEPAGE_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_TOOLS_FOR_HOMEPAGE_FAIL,
			payload: error.response.data.message,
		});
	}
};

// update tool
export const updateTool = (id, toolData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_TOOL_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/tools/${id}`, toolData, config);

		dispatch({ type: UPDATE_TOOL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UPDATE_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete tool
export const deleteTool = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_TOOL_REQUEST });

		const { data } = await axios.delete(`/api/tools/${id}`);

		dispatch({ type: DELETE_TOOL_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get tool
export const getTool = (req, id) => async (dispatch) => {
	try {
		dispatch({ type: GET_TOOL_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/tools/${id}`, config);

		dispatch({
			type: GET_TOOL_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllTools = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_TOOLS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/admin/tools`, config);

		dispatch({ type: GET_TOOLS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_TOOLS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// verify tool
export const verifyTool = (id) => async (dispatch) => {
	try {
		dispatch({ type: VERIFY_TOOL_REQUEST });

		const { data } = await axios.post(`/api/admin/tools/${id}/verify`);

		dispatch({ type: VERIFY_TOOL_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: VERIFY_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// unverify tool
export const unverifyTool = (id) => async (dispatch) => {
	try {
		dispatch({ type: UNVERIFY_TOOL_REQUEST });

		const { data } = await axios.post(`/api/admin/tools/${id}/unverify`);

		dispatch({ type: UNVERIFY_TOOL_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: UNVERIFY_TOOL_FAIL,
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
