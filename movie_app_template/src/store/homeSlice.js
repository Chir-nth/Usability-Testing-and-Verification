import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "homes",
  initialState: {
    url: {},
    genres: {},
  },
});

// Action creators are generated for each case reducer function

export default homeSlice.reducer;
