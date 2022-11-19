import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './reducers'
import { setLocalStorage } from "../utils/localStorage";

const loggerMiddleWare = store => next => action => {
  let result
  
  console.log('action', action)
  result=next(action)
  if (action.type === "ADD_PERSON_TO_FAVOURITE") {
    alert('Hero has been added to favourites')
  } else if (action.type === "REMOVE_PERSON_FROM_FAVOURITE"){
    alert("Hero has been removed from favourites");
  } return result;
}


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleWare),
});

store.subscribe(() => {
    setLocalStorage('store', store.getState().favouriteReducer)
})

export default store;