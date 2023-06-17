import axios from "axios";
import {
	CREATE_CATEGORY_REQUEST,
	CREATE_CATEGORY_SUCCESS,
	CREATE_CATEGORY_FAIL,
	GET_CATEGORIES_REQUEST,
	GET_CATEGORIES_SUCCESS,
	GET_CATEGORIES_FAIL,
	UPDATE_CATEGORY_REQUEST,
	UPDATE_CATEGORY_SUCCESS,
	UPDATE_CATEGORY_RESET,
	UPDATE_CATEGORY_FAIL,
	DELETE_CATEGORY_REQUEST,
	DELETE_CATEGORY_SUCCESS,
	DELETE_CATEGORY_RESET,
	DELETE_CATEGORY_FAIL,
	GET_CATEGORY_REQUEST,
	GET_CATEGORY_SUCCESS,
	GET_CATEGORY_FAIL,
	CLEAR_ERRORS,
} from "../constants/categoryConstants";

// create category
export const createCategory = (categoryInfo) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_CATEGORY_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/categories`, categoryInfo, config);

		dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_CATEGORY_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all categories
export const getAllCategories = () => async (dispatch) => {
	try {
		dispatch({ type: GET_CATEGORIES_REQUEST });

		const { data } = await axios.get(`/api/categories`);

		dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_CATEGORIES_FAIL,
			payload: error.response.data.message,
		});
	}
};

// update category
export const updateCategory = (id, categoryInfo) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_CATEGORY_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/categories/${id}`, categoryInfo, config);

		dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UPDATE_CATEGORY_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete category
export const deleteCategory = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_CATEGORY_REQUEST });

		const { data } = await axios.delete(`/api/categories/${id}`);

		dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_CATEGORY_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get category
export const getCategory = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_CATEGORY_REQUEST });

		const { data } = await axios.get(`/api/categories/${id}`);

		dispatch({
			type: GET_CATEGORY_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_CATEGORY_FAIL,
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
