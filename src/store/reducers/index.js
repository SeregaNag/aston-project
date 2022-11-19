import { combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteReducer";

export default combineReducers({
    favouriteReducer: favouriteReducer
})