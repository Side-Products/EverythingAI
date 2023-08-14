import {
	CREATE_REVIEW_REQUEST,
	CREATE_REVIEW_SUCCESS,
	CREATE_REVIEW_FAIL,
	GET_REVIEWS_REQUEST,
	GET_REVIEWS_SUCCESS,
	GET_REVIEWS_FAIL,
	UPDATE_REVIEW_REQUEST,
	UPDATE_REVIEW_SUCCESS,
	UPDATE_REVIEW_RESET,
	UPDATE_REVIEW_FAIL,
	DELETE_REVIEW_REQUEST,
	DELETE_REVIEW_SUCCESS,
	DELETE_REVIEW_RESET,
	DELETE_REVIEW_FAIL,
	CLEAR_ERRORS,
} from "../constants/reviewConstants";

// create review reducer
export const createReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_REVIEW_REQUEST:
			return {
				loading: true,
			};
		case CREATE_REVIEW_SUCCESS:
			return {
				loading: false,
				success: true,
				review: action.payload.review,
			};
		case CREATE_REVIEW_FAIL:
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

// get all reviews reducer
export const getAllReviewsReducer = (state = { reviews: [] }, action) => {
	switch (action.type) {
		case GET_REVIEWS_REQUEST:
			return {
				loading: true,
			};
		case GET_REVIEWS_SUCCESS:
			return {
				loading: false,
				reviews: action.payload.reviews,
				reviewsCount: action.payload.reviewsCount,
				resultsPerPage: action.payload.resultsPerPage,
				filteredReviewsCount: action.payload.filteredReviewsCount,
			};
		case GET_REVIEWS_FAIL:
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

// update review reducer
export const updateReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_REVIEW_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_REVIEW_SUCCESS:
			return {
				loading: false,
				isUpdated: action.payload,
			};
		case UPDATE_REVIEW_RESET:
			return {
				loading: false,
				isUpdated: false,
			};
		case UPDATE_REVIEW_FAIL:
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

// delete review reducer
export const deleteReviewReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_REVIEW_REQUEST:
			return {
				loading: true,
			};
		case DELETE_REVIEW_SUCCESS:
			return {
				loading: false,
				isDeleted: action.payload,
			};
		case DELETE_REVIEW_RESET:
			return {
				loading: false,
				isDeleted: false,
			};
		case DELETE_REVIEW_FAIL:
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
