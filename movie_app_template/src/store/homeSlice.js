import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "homes",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    setApiConfigration: (state, action) => {
      //We want to update the url state
      state.url = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setApiConfigration } = homeSlice.actions;
export default homeSlice.reducer;
