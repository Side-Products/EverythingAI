import axios from "axios";
import absoluteUrl from "next-absolute-url";
import {
	CREATE_GEN_AI_PARTNER_REQUEST,
	CREATE_GEN_AI_PARTNER_SUCCESS,
	CREATE_GEN_AI_PARTNER_FAIL,
	GET_GEN_AI_PARTNERS_REQUEST,
	GET_GEN_AI_PARTNERS_SUCCESS,
	GET_GEN_AI_PARTNERS_FAIL,
	GET_ADMIN_GEN_AI_PARTNERS_REQUEST,
	GET_ADMIN_GEN_AI_PARTNERS_SUCCESS,
	GET_ADMIN_GEN_AI_PARTNERS_FAIL,
	GET_VERIFIED_GEN_AI_PARTNERS_REQUEST,
	GET_VERIFIED_GEN_AI_PARTNERS_SUCCESS,
	GET_VERIFIED_GEN_AI_PARTNERS_FAIL,
	GET_UNVERIFIED_GEN_AI_PARTNERS_REQUEST,
	GET_UNVERIFIED_GEN_AI_PARTNERS_SUCCESS,
	GET_UNVERIFIED_GEN_AI_PARTNERS_FAIL,
	UPDATE_GEN_AI_PARTNER_REQUEST,
	UPDATE_GEN_AI_PARTNER_SUCCESS,
	UPDATE_GEN_AI_PARTNER_RESET,
	UPDATE_GEN_AI_PARTNER_FAIL,
	DELETE_GEN_AI_PARTNER_REQUEST,
	DELETE_GEN_AI_PARTNER_SUCCESS,
	DELETE_GEN_AI_PARTNER_RESET,
	DELETE_GEN_AI_PARTNER_FAIL,
	VERIFY_GEN_AI_PARTNER_REQUEST,
	VERIFY_GEN_AI_PARTNER_SUCCESS,
	VERIFY_GEN_AI_PARTNER_RESET,
	VERIFY_GEN_AI_PARTNER_FAIL,
	UNVERIFY_GEN_AI_PARTNER_REQUEST,
	UNVERIFY_GEN_AI_PARTNER_SUCCESS,
	UNVERIFY_GEN_AI_PARTNER_RESET,
	UNVERIFY_GEN_AI_PARTNER_FAIL,
	GET_GEN_AI_PARTNER_REQUEST,
	GET_GEN_AI_PARTNER_SUCCESS,
	GET_GEN_AI_PARTNER_FAIL,
	CLEAR_ERRORS,
} from "../constants/genAIPartnerConstants";

// create gen ai partner
export const createGenAIPartner = (partnerData) => async (dispatch) => {
	try {
		dispatch({ type: CREATE_GEN_AI_PARTNER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/gen-ai-partners`, partnerData, config);

		dispatch({ type: CREATE_GEN_AI_PARTNER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: CREATE_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all gen ai partners
export const getAllGenAIPartners = () => async (dispatch) => {
	try {
		dispatch({ type: GET_GEN_AI_PARTNERS_REQUEST });

		const { data } = await axios.get(`/api/gen-ai-partners`);

		dispatch({ type: GET_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get all gen ai partners server side
export const getAllGenAIPartnersServerSide = (req, type, query) => async (dispatch) => {
	try {
		dispatch({ type: GET_GEN_AI_PARTNERS_REQUEST });

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
		const { data } = await axios.get(`${origin}/api/gen-ai-partners?page=${query?.page}`, {
			params: params,
			headers: config.headers,
		});

		dispatch({ type: GET_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// update gen ai partner
export const updateGenAIPartner = (id, partnerData) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_GEN_AI_PARTNER_REQUEST });

		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const { data } = await axios.post(`/api/gen-ai-partners/${id}`, partnerData, config);

		dispatch({ type: UPDATE_GEN_AI_PARTNER_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: UPDATE_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// delete gen ai partner
export const deleteGenAIPartner = (id) => async (dispatch) => {
	try {
		dispatch({ type: DELETE_GEN_AI_PARTNER_REQUEST });

		const { data } = await axios.delete(`/api/gen-ai-partners/${id}`);

		dispatch({ type: DELETE_GEN_AI_PARTNER_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: DELETE_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get gen ai partner
export const getGenAIPartner = (req, id) => async (dispatch) => {
	try {
		dispatch({ type: GET_GEN_AI_PARTNER_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/gen-ai-partners/${id}`, config);

		dispatch({
			type: GET_GEN_AI_PARTNER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllGenAIPartnersServerSide = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_ADMIN_GEN_AI_PARTNERS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/admin/gen-ai-partners`, config);

		dispatch({ type: GET_ADMIN_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_ADMIN_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllGenAIPartners = (currentPage) => async (dispatch) => {
	try {
		dispatch({ type: GET_ADMIN_GEN_AI_PARTNERS_REQUEST });

		const { data } = await axios.get(`/api/admin/gen-ai-partners?page=${currentPage}`);

		dispatch({ type: GET_ADMIN_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_ADMIN_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllVerifiedGenAIPartnersServerSide = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_VERIFIED_GEN_AI_PARTNERS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/admin/gen-ai-partners/verified`, config);

		dispatch({ type: GET_VERIFIED_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		console.log(error);
		dispatch({
			type: GET_VERIFIED_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllVerifiedGenAIPartners = (currentPage) => async (dispatch) => {
	try {
		dispatch({ type: GET_VERIFIED_GEN_AI_PARTNERS_REQUEST });

		const { data } = await axios.get(`/api/admin/gen-ai-partners/verified?page=${currentPage}`);

		dispatch({ type: GET_VERIFIED_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_VERIFIED_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllUnverifiedGenAIPartnersServerSide = (req) => async (dispatch) => {
	try {
		dispatch({ type: GET_UNVERIFIED_GEN_AI_PARTNERS_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/admin/gen-ai-partners/unverified`, config);

		dispatch({ type: GET_UNVERIFIED_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_UNVERIFIED_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

export const adminGetAllUnverifiedGenAIPartners = (currentPage) => async (dispatch) => {
	try {
		dispatch({ type: GET_UNVERIFIED_GEN_AI_PARTNERS_REQUEST });

		const { data } = await axios.get(`/api/admin/gen-ai-partners/unverified?page=${currentPage}`);

		dispatch({ type: GET_UNVERIFIED_GEN_AI_PARTNERS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: GET_UNVERIFIED_GEN_AI_PARTNERS_FAIL,
			payload: error.response.data.message,
		});
	}
};

// verify partner
export const verifyPartner = (id) => async (dispatch) => {
	try {
		dispatch({ type: VERIFY_GEN_AI_PARTNER_REQUEST });

		const { data } = await axios.post(`/api/admin/gen-ai-partners/${id}/verify`);

		dispatch({ type: VERIFY_GEN_AI_PARTNER_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: VERIFY_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// unverify partner
export const unverifyPartner = (id) => async (dispatch) => {
	try {
		dispatch({ type: UNVERIFY_GEN_AI_PARTNER_REQUEST });

		const { data } = await axios.post(`/api/admin/gen-ai-partners/${id}/unverify`);

		dispatch({ type: UNVERIFY_GEN_AI_PARTNER_SUCCESS, payload: data.success });
	} catch (error) {
		dispatch({
			type: UNVERIFY_GEN_AI_PARTNER_FAIL,
			payload: error.response.data.message,
		});
	}
};

// get partner by slug
export const getPartnerBySlug = (req, slug) => async (dispatch) => {
	try {
		dispatch({ type: GET_GEN_AI_PARTNER_REQUEST });

		const { origin } = absoluteUrl(req);
		const config = {
			headers: {
				cookie: req.headers.cookie,
			},
		};
		const { data } = await axios.get(`${origin}/api/gen-ai-partners/find/${slug}`, config);

		dispatch({
			type: GET_GEN_AI_PARTNER_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_GEN_AI_PARTNER_FAIL,
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
