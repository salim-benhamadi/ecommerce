import { combineReducers } from "redux";
import {rootReducer, selectedProductReducer} from "./rootReducer";

export const reducers = combineReducers({
    allProducts: rootReducer,
    product: selectedProductReducer,
});

