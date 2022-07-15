import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: true,
    token: null,
    userId: null,
    firstName: null,
    lastName: null,
  },
  reducers: {
    setUserData(state, { payload }) {
      const { token } = payload;
      state.token = token;
    },
    setIsloading(state, { payload }) {
      state.isLoading = payload; // true or false
    }
  }
});

export const { setUserData, setIsloading } = userSlice.actions;

export default userSlice.reducer;