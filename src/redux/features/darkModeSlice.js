import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkmode: false };

const darkSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      state.darkmode = action.payload;
    },
  },
});

export const { setDarkMode } = darkSlice.actions;
export default darkSlice.reducer;

export const selectCurrentMode = (state) => state.dark.darkmode;
