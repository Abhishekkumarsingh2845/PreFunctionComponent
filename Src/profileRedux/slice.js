import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: " ",
};

const profileslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    prof: (state, action) => {
      state.email = action.payload;
    },
    clearemail: (state) => {
      state.email = " ";
    },
  },
});
export const { prof, clearemail } = profileslice.actions;
export default profileslice.reducer;
