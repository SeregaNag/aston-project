import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './reducers'
import { setLocalStorage } from "../utils/localStorage";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
    reducer: rootReducer,
    middleware
});

store.subscribe(() => {
    setLocalStorage('store', store.getState().favouriteReducer)
})

export default store;