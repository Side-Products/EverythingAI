import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
	CREATE_AI_RECOMMENDATION_REQUEST,
	CREATE_AI_RECOMMENDATION_SUCCESS,
	CREATE_AI_RECOMMENDATION_FAIL,
	GET_AI_RECOMMENDATIONS_REQUEST,
	GET_AI_RECOMMENDATIONS_SUCCESS,
	GET_AI_RECOMMENDATIONS_FAIL,
	DELETE_AI_RECOMMENDATION_REQUEST,
	DELETE_AI_RECOMMENDATION_SUCCESS,
	DELETE_AI_RECOMMENDATION_RESET,
	DELETE_AI_RECOMMENDATION_FAIL,
	GET_AI_RECOMMENDATION_REQUEST,
	GET_AI_RECOMMENDATION_SUCCESS,
	GET_AI_RECOMMENDATION_FAIL,
	CLEAR_ERRORS,
} from "../constants/aiRecommenderConstants";

// create ai recommendation
export const createAiRecommendation = (aiRecommendationData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_AI_RECOMMENDATION_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/ai-recommendations`, aiRecommendationData, config);

		dispatch({ type: CREATE_AI_RECOMMENDATION_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_AI_RECOMMENDATION_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete ai recommendation
export const deleteAiRecommendation = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_AI_RECOMMENDATION_REQUEST });

		const { data } = await axios.delete(`/api/ai-recommendations/${id}`);

		dispatch({ type: DELETE_AI_RECOMMENDATION_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_AI_RECOMMENDATION_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get ai recommendation
export const getAiRecommendation = (req, id) => async (dispatch) => {
	try {
		dispatch({ type: GET_AI_RECOMMENDATION_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/ai-recommendations/${id}`, config);

		dispatch({
			type: GET_AI_RECOMMENDATION_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_AI_RECOMMENDATION_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllAiRecommendations = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_AI_RECOMMENDATIONS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/ai-recommendations`, config);

		dispatch({ type: GET_AI_RECOMMENDATIONS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_AI_RECOMMENDATIONS_FAIL,
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
