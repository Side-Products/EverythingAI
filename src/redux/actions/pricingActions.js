import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
	CREATE_PRICING_REQUEST,
	CREATE_PRICING_SUCCESS,
	CREATE_PRICING_FAIL,
	GET_PRICINGS_REQUEST,
	GET_PRICINGS_SUCCESS,
	GET_PRICINGS_FAIL,
	UPDATE_PRICING_REQUEST,
	UPDATE_PRICING_SUCCESS,
	UPDATE_PRICING_RESET,
	UPDATE_PRICING_FAIL,
	DELETE_PRICING_REQUEST,
	DELETE_PRICING_SUCCESS,
	DELETE_PRICING_RESET,
	DELETE_PRICING_FAIL,
	CLEAR_ERRORS,
} from "../constants/pricingConstants";

// create pricing
export const createPricing = (pricingData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_PRICING_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/pricings`, pricingData, config);

		dispatch({ type: CREATE_PRICING_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_PRICING_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all pricings
export const getAllPricings = () => async (dispatch) => {
	try {
		dispatch({ type: GET_PRICINGS_REQUEST });

		const { data } = await axios.get(`/api/pricings`);

		dispatch({ type: GET_PRICINGS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_PRICINGS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// update pricing
export const updatePricing = (id, pricingData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_PRICING_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/pricings/${id}`, pricingData, config);

		dispatch({ type: UPDATE_PRICING_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UPDATE_PRICING_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete pricing
export const deletePricing = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_PRICING_REQUEST });

		const { data } = await axios.delete(`/api/pricings/${id}`);

		dispatch({ type: DELETE_PRICING_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_PRICING_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllPricings = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_PRICINGS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/pricings`, config);

		dispatch({ type: GET_PRICINGS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_PRICINGS_FAIL,
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
