import { getLocalStorage } from "../../utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = getLocalStorage("store")

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: initialState,
  reducers: {
    setPersonToFavourite: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removePersonFromFavourite: (state, action) => {
      const { [action.payload]: obj, ...rest } = state;
      return {
        ...rest,
      };
    },
  },
});

export const { setPersonToFavourite, removePersonFromFavourite } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
