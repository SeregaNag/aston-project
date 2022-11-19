import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from './reducers'

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
    
})

export default store;