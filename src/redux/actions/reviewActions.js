import axios from "axios";
import absoluteUrl from "next-absolute-url";
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

// create review
export const createReview = (reviewData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_REVIEW_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/reviews`, reviewData, config);

		dispatch({ type: CREATE_REVIEW_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_REVIEW_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all reviews
export const getAllReviews = (slug) => async (dispatch) => {
	try {
		dispatch({ type: GET_REVIEWS_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/reviews/find`, { slug: slug }, config);
		dispatch({ type: GET_REVIEWS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_REVIEWS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all reviews
export const getAllReviewsServerSide = (req, limit) => async (dispatch) => {
	try {
		dispatch({ type: GET_REVIEWS_REQUEST });

		const { origin } = absoluteUrl(req);
		if (limit) {
			const { data } = await axios.get(`${origin}/api/reviews`, {
				params: {
					limit: limit,
				},
			});
			dispatch({ type: GET_REVIEWS_SUCCESS, payload: data });
		} else {
			const { data } = await axios.get(`${origin}/api/reviews`);

			dispatch({ type: GET_REVIEWS_SUCCESS, payload: data });
		}
	} catch (error) {
		dispatch({
			type: GET_REVIEWS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// update review
export const updateReview = (id, reviewData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_REVIEW_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/reviews/${id}`, reviewData, config);

		dispatch({ type: UPDATE_REVIEW_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UPDATE_REVIEW_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete review
export const deleteReview = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_REVIEW_REQUEST });

		const { data } = await axios.delete(`/api/reviews/${id}`);

		dispatch({ type: DELETE_REVIEW_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_REVIEW_FAIL,
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
