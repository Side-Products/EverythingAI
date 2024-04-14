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

// create ai recommendation reducer
export const createAiRecommendationReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_AI_RECOMMENDATION_REQUEST:
			return {
				loading: true,
			};
		case CREATE_AI_RECOMMENDATION_SUCCESS:
			return {
				loading: false,
				success: true,
				recommendation: action.payload.recommendation,
			};
		case CREATE_AI_RECOMMENDATION_FAIL:
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

// get all ai recommendations reducer
export const getAllAiRecommendationsReducer = (state = { recommendations: [] }, action) => {
	switch (action.type) {
		case GET_AI_RECOMMENDATIONS_REQUEST:
			return {
				loading: true,
			};
		case GET_AI_RECOMMENDATIONS_SUCCESS:
			return {
				loading: false,
				recommendations: action.payload.recommendations,
				recommendationsCount: action.payload.recommendationsCount,
			};
		case GET_AI_RECOMMENDATIONS_FAIL:
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

// delete ai recommendation reducer
export const deleteAiRecommendationReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_AI_RECOMMENDATION_REQUEST:
			return {
				loading: true,
			};
		case DELETE_AI_RECOMMENDATION_SUCCESS:
			return {
				loading: false,
				isDeleted: action.payload,
			};
		case DELETE_AI_RECOMMENDATION_RESET:
			return {
				loading: false,
				isDeleted: false,
			};
		case DELETE_AI_RECOMMENDATION_FAIL:
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

// get ai recommendation reducer
export const getAiRecommendationReducer = (state = { recommendation: {} }, action) => {
	switch (action.type) {
		case GET_AI_RECOMMENDATION_REQUEST:
			return {
				loading: true,
			};
		case GET_AI_RECOMMENDATION_SUCCESS:
			return {
				loading: false,
				recommendation: action.payload.recommendation,
			};
		case GET_AI_RECOMMENDATION_FAIL:
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
