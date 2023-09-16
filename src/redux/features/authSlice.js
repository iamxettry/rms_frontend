import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: '' };

const authSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = (state) => state.user.username;
