import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";
import { setLocalStorage } from "../utils/localStorage";
import favouriteSlice from "./slices/favouriteSlice";

const store = configureStore({
  reducer: favouriteSlice,
});

store.subscribe(() => {
  console.log(store.getState().favouriteSlice)
  setLocalStorage("store", store.getState().favouriteSlice);
});

export default store;
