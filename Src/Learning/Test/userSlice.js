import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    isRegistered: false,
    isLoggedIn: false,
  },
  reducers: {
    setUserState: (state, action) => {
      state.username = action.payload.username;
      state.isRegistered = action.payload.isRegistered;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const {setUserState} = userSlice.actions;

export default userSlice.reducer;
