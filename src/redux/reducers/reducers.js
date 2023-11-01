import { combineReducers } from "redux";
import {
  authReducer,
  userReducer,
  loadedUserReducer,
  forgotPasswordReducer,
  adminGetAllUsersReducer,
  adminGetUserDetailsReducer,
} from "./userReducers";

import {
  getPurchaseTermsReducer,
  createPurchaseTermsReducer,
  updatePurchaseTermsReducer,
} from "./purchaseTermsReducers";

import {
  createCategoryReducer,
  getAllCategoriesReducer,
  updateCategoryReducer,
  deleteCategoryReducer,
  getCategoryReducer,
} from "./categoryReducers";
import {
  newContactUsMessageReducer,
  adminGetContactUsMessagesReducer,
  adminDeleteContactUsMessageReducer,
} from "./contactUsReducers";
import {
  createPricingReducer,
  getAllPricingsReducer,
  updatePricingReducer,
  deletePricingReducer,
} from "./pricingReducers";
import {
  createToolReducer,
  getAllToolsReducer,
  getToolsForHomepageReducer,
  getToolReducer,
  updateToolReducer,
  deleteToolReducer,
  verifyToolReducer,
  unverifyToolReducer,
  getAdminAllToolsReducer,
  getAllVerifiedToolsReducer,
  getAllUnverifiedToolsReducer,
} from "./toolReducers";
import {
  createLikedToolReducer,
  deleteLikedToolReducer,
  myLikedToolsReducer,
} from "./likedToolReducers";
import { getAllSubCategoriesReducer } from "./subCategoryReducers";
import {
  createCollectionReducer,
  getAllCollectionsReducer,
  getCollectionReducer,
  updateCollectionReducer,
  deleteCollectionReducer,
  addToolToCollectionReducer,
  removeToolFromCollectionReducer,
} from "./collectionReducers";
import {
  createReviewReducer,
  getAllReviewsReducer,
  updateReviewReducer,
  deleteReviewReducer,
} from "./reviewReducers";
import {
  createAiRecommendationReducer,
  getAllAiRecommendationsReducer,
  deleteAiRecommendationReducer,
  getAiRecommendationReducer,
} from "./aiRecommenderReducers";

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
  // tool
  createTool: createToolReducer,
  allTools: getAllToolsReducer,
  adminAllTools: getAdminAllToolsReducer,
  allVerifiedTools: getAllVerifiedToolsReducer,
  allUnverifiedTools: getAllUnverifiedToolsReducer,
  toolsForHomepage: getToolsForHomepageReducer,
  tool: getToolReducer,
  updateTool: updateToolReducer,
  deleteTool: deleteToolReducer,
  verifyTool: verifyToolReducer,
  unverifyTool: unverifyToolReducer,
  // liked tool
  createLikedTool: createLikedToolReducer,
  deleteLikedTool: deleteLikedToolReducer,
  myLikedTools: myLikedToolsReducer,
  // subcategory
  allSubCategories: getAllSubCategoriesReducer,
  // collection
  createCollection: createCollectionReducer,
  allCollections: getAllCollectionsReducer,
  collection: getCollectionReducer,
  updateCollection: updateCollectionReducer,
  deleteCollection: deleteCollectionReducer,
  addToolToCollection: addToolToCollectionReducer,
  removeToolFromCollection: removeToolFromCollectionReducer,
  // review
  createReview: createReviewReducer,
  allReviews: getAllReviewsReducer,
  updateReview: updateReviewReducer,
  deleteReview: deleteReviewReducer,
  // recommendation
  createAiRecommendation: createAiRecommendationReducer,
  allAiRecommendations: getAllAiRecommendationsReducer,
  deleteAiRecommendation: deleteAiRecommendationReducer,
  getAiRecommendation: getAiRecommendationReducer,
  // purchase terms
  getPurchaseTerms: getPurchaseTermsReducer,
  createPurchaseTerms: createPurchaseTermsReducer,
  updatePurchaseTerms: updatePurchaseTermsReducer,
});

export default reducer;
