import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
	CREATE_LIKED_TOOL_REQUEST,
	CREATE_LIKED_TOOL_SUCCESS,
	CREATE_LIKED_TOOL_FAIL,
	DELETE_LIKED_TOOL_REQUEST,
	DELETE_LIKED_TOOL_SUCCESS,
	DELETE_LIKED_TOOL_RESET,
	DELETE_LIKED_TOOL_FAIL,
	MY_LIKED_TOOLS_SUCCESS,
	MY_LIKED_TOOLS_FAIL,
	CLEAR_ERRORS,
} from "../constants/likedToolConstants";

// like tool
export const likeTool = (id) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_LIKED_TOOL_REQUEST });

		const { data } = await axios.post(`/api/like-tool/${id}`);

		dispatch({ type: CREATE_LIKED_TOOL_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_LIKED_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete liked tool
export const deleteLikedTool = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_LIKED_TOOL_REQUEST });

		const { data } = await axios.delete(`/api/like-tool/${id}`);

		dispatch({ type: DELETE_LIKED_TOOL_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_LIKED_TOOL_FAIL,
			payload: error.response.data.message,
		});
	}
};

// Get my liked tools
export const getMyLikedTools =
	(req, currentPage = 1, search = "") =>
	async (dispatch) => {
		try {
			const { origin } = absoluteUrl(req);
			const config = {
				headers: {
					cookie: req.headers.cookie,
				},
			};
			const { data } = await axios.get(`${origin}/api/tools/liked?page=${currentPage}&search=${search}`, config);

			dispatch({
				type: MY_LIKED_TOOLS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: MY_LIKED_TOOLS_FAIL,
				payload: error.response.data.message,
			});
		}
	};

// Get liked tools
export const getLikedTools =
	(req, userId = "") =>
	async (dispatch) => {
		try {
			const { origin } = absoluteUrl(req);
			const config = {
				headers: {
					cookie: req.headers.cookie,
				},
			};
			const { data } = await axios.get(`${origin}/api/tools/get-liked?userId=${userId}`, config);

			dispatch({
				type: MY_LIKED_TOOLS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: MY_LIKED_TOOLS_FAIL,
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
