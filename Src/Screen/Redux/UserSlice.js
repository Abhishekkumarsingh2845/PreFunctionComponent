import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  auth: false,
  profile: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      (state.auth = true), (state.profile = action.payload);
      AsyncStorage.setItem(
        "general",
        JSON.stringify({ auth: true, profile: action.payload })
      );
    },
    logout: (state, action) => {
      state.auth = false;
      state.profile = null;
      AsyncStorage.removeItem("general");
    },
    initializeAuth: (state, action) => {
      state.auth = action.payload.auth;
      state.profile = action.payload.profile;
    },
  },
});

export const { login, logout, initializeAuth } = userSlice.actions;
export default userSlice.reducer;
