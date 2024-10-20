import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"; // Import the correct slice reducer

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
