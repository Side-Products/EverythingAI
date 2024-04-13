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

// create gen ai reducer
export const createGenAIPartnerReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case CREATE_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				success: true,
				partner: action.payload.partner,
			};
		case CREATE_GEN_AI_PARTNER_FAIL:
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

// get all gen ai partners reducer
export const getAllGenAIPartnersReducer = (state = { genAIPartners: [] }, action) => {
	switch (action.type) {
		case GET_GEN_AI_PARTNERS_REQUEST:
			return {
				loading: true,
			};
		case GET_GEN_AI_PARTNERS_SUCCESS:
			return {
				loading: false,
				genAIPartners: action.payload.genAIPartners,
				genAIPartnersCount: action.payload.genAIPartnersCount ?? null,
				resultsPerPage: action.payload.resultsPerPage ?? 100,
				filteredGenAIPartnersCount: action.payload.filteredGenAIPartnersCount ?? null,
			};
		case GET_GEN_AI_PARTNERS_FAIL:
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

// get admin all genAIPartners reducer
export const getAdminAllGenAIPartnersReducer = (state = { genAIPartners: [] }, action) => {
	switch (action.type) {
		case GET_ADMIN_GEN_AI_PARTNERS_REQUEST:
			return {
				loading: true,
			};
		case GET_ADMIN_GEN_AI_PARTNERS_SUCCESS:
			return {
				loading: false,
				genAIPartners: action.payload.genAIPartners,
				genAIPartnersCount: action.payload.genAIPartnersCount ?? null,
				resultsPerPage: action.payload.resultsPerPage,
				filteredGenAIPartnersCount: action.payload.filteredGenAIPartnersCount,
			};
		case GET_ADMIN_GEN_AI_PARTNERS_FAIL:
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

// get all verified genAIPartners reducer
export const getAllVerifiedGenAIPartnersReducer = (state = { verifiedGenAIPartners: [] }, action) => {
	switch (action.type) {
		case GET_VERIFIED_GEN_AI_PARTNERS_REQUEST:
			return {
				loading: true,
			};
		case GET_VERIFIED_GEN_AI_PARTNERS_SUCCESS:
			return {
				loading: false,
				genAIPartners: action.payload.genAIPartners && action.payload.genAIPartners.length > 0 ? action.payload.genAIPartners : [],
				verifiedGenAIPartners: action.payload.verifiedGenAIPartners ?? [],
				verifiedGenAIPartnersCount: action.payload.verifiedGenAIPartnersCount ?? null,
				resultsPerPage: action.payload.resultsPerPage,
				filteredGenAIPartnersCount: action.payload.filteredGenAIPartnersCount,
			};
		case GET_VERIFIED_GEN_AI_PARTNERS_FAIL:
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

// get all unverified genAIPartners reducer
export const getAllUnverifiedGenAIPartnersReducer = (state = { unverifiedGenAIPartners: [] }, action) => {
	switch (action.type) {
		case GET_UNVERIFIED_GEN_AI_PARTNERS_REQUEST:
			return {
				loading: true,
			};
		case GET_UNVERIFIED_GEN_AI_PARTNERS_SUCCESS:
			return {
				loading: false,
				genAIPartners: action.payload.genAIPartners && action.payload.genAIPartners.length > 0 ? action.payload.genAIPartners : [],
				unverifiedGenAIPartners: action.payload.unverifiedGenAIPartners ?? [],
				unverifiedGenAIPartnersCount: action.payload.unverifiedGenAIPartnersCount ?? null,
				resultsPerPage: action.payload.resultsPerPage,
				filteredGenAIPartnersCount: action.payload.filteredGenAIPartnersCount,
			};
		case GET_UNVERIFIED_GEN_AI_PARTNERS_FAIL:
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

// update tool reducer
export const updateGenAIPartnerReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case UPDATE_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				isUpdated: action.payload,
			};
		case UPDATE_GEN_AI_PARTNER_RESET:
			return {
				loading: false,
				isUpdated: false,
			};
		case UPDATE_GEN_AI_PARTNER_FAIL:
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
export const deleteGenAIPartnerReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case DELETE_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				isDeleted: action.payload,
			};
		case DELETE_GEN_AI_PARTNER_RESET:
			return {
				loading: false,
				isDeleted: false,
			};
		case DELETE_GEN_AI_PARTNER_FAIL:
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

// get partner reducer
export const getGenAIPartnerReducer = (state = { genAIPartner: {} }, action) => {
	switch (action.type) {
		case GET_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case GET_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				genAIPartner: action.payload.genAIPartner,
			};
		case GET_GEN_AI_PARTNER_FAIL:
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

// verify partner reducer
export const verifyGenAIPartnerReducer = (state = {}, action) => {
	switch (action.type) {
		case VERIFY_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case VERIFY_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				isVerified: action.payload,
			};
		case VERIFY_GEN_AI_PARTNER_RESET:
			return {
				loading: false,
				isVerified: false,
			};
		case VERIFY_GEN_AI_PARTNER_FAIL:
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

// unverify partner reducer
export const unverifyGenAIPartnerReducer = (state = {}, action) => {
	switch (action.type) {
		case UNVERIFY_GEN_AI_PARTNER_REQUEST:
			return {
				loading: true,
			};
		case UNVERIFY_GEN_AI_PARTNER_SUCCESS:
			return {
				loading: false,
				isUnverified: action.payload,
			};
		case UNVERIFY_GEN_AI_PARTNER_RESET:
			return {
				loading: false,
				isUnverified: false,
			};
		case UNVERIFY_GEN_AI_PARTNER_FAIL:
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
