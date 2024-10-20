import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
  },
});

export const { setEmail, setPhone } = userSlice.actions;
export default userSlice.reducer;
