import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../Redux2/actionn";

const slicee = createSlice({
  name: "Auth",
  initialState: {
    isLogged: false,
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLogged = true;
      state.user = action.payload;
    },
    logoutt: (state, action) => {
      state.isLogged = false;
      state.user = null;
    },
  },
});

export const {login,logoutt} = slicee.actions;
export default slicee.reducer
