import {
  ADD_PERSON_TO_FAVOURITE,
  REMOVE_PERSON_FROM_FAVOURITE,
} from "../constants/actionTypes";


export const setPersonToFavourite = (hero) => {
  return { type: ADD_PERSON_TO_FAVOURITE, payload: hero };
};

export const removePersonFromFavourite = (currentId) => ({
  type: REMOVE_PERSON_FROM_FAVOURITE,
  payload: currentId,
});
