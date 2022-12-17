import { combineReducers } from "redux";
import { productListReducer } from "./productsReducer";

export const reducer = combineReducers({
    listOfProducts: productListReducer
})