import { combineReducers } from "redux";
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, adminGetAllUsersReducer, adminGetUserDetailsReducer } from "./userReducers";
import { createCategoryReducer, getAllCategoriesReducer, updateCategoryReducer, deleteCategoryReducer, getCategoryReducer } from "./categoryReducers";
import { newContactUsMessageReducer, adminGetContactUsMessagesReducer, adminDeleteContactUsMessageReducer } from "./contactUsReducers";
import { createPricingReducer, getAllPricingsReducer, updatePricingReducer, deletePricingReducer } from "./pricingReducers";

const reducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	loadedUser: loadedUserReducer,
	allUsers: adminGetAllUsersReducer,
	userDetails: adminGetUserDetailsReducer,
	forgotPassword: forgotPasswordReducer,
	// category
	createCategory: createCategoryReducer,
	allCategories: getAllCategoriesReducer,
	updateCategory: updateCategoryReducer,
	deleteCategory: deleteCategoryReducer,
	category: getCategoryReducer,
	// contact us
	newContactUsMessage: newContactUsMessageReducer,
	adminGetContactUsMessages: adminGetContactUsMessagesReducer,
	adminDeleteContactUsMessage: adminDeleteContactUsMessageReducer,
	// pricing
	createPricing: createPricingReducer,
	allPricings: getAllPricingsReducer,
	updatePricing: updatePricingReducer,
	deletePricing: deletePricingReducer,
});

export default reducer;
