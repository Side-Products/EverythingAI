import { combineReducers } from "redux";
import { authReducer, userReducer, loadedUserReducer, forgotPasswordReducer, adminGetAllUsersReducer, adminGetUserDetailsReducer } from "./userReducers";
import { createCategoryReducer, getAllCategoriesReducer, updateCategoryReducer, deleteCategoryReducer, getCategoryReducer } from "./categoryReducers";

const reducer = combineReducers({
	auth: authReducer,
	user: userReducer,
	loadedUser: loadedUserReducer,
	allUsers: adminGetAllUsersReducer,
	userDetails: adminGetUserDetailsReducer,
	forgotPassword: forgotPasswordReducer,
	createCategory: createCategoryReducer,
	allCategories: getAllCategoriesReducer,
	updateCategory: updateCategoryReducer,
	deleteCategory: deleteCategoryReducer,
	category: getCategoryReducer,
});

export default reducer;
