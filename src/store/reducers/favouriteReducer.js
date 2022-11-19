import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "../constants/actionTypes";
import { getLocalStorage } from "../../utils/localStorage";

const initialState = getLocalStorage('store');

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON_TO_FAVOURITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_PERSON_FROM_FAVOURITE:
      const {[action.payload]: obj, ...rest} = state
      return {
        ...rest
      };
    default:
      return state;
  }
};

export default favouriteReducer;
