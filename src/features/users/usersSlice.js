import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


import usersService from './usersService';
const initialState = {
  user: '',
  token: '',
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        navigate('/');
      })
  }
})
export const login = createAsyncThunk("users/login", async (loginForm) => {
  try {
    return await usersService.login(loginForm);
  } catch (error) {
    console.error(error);
  }
});
export default usersSlice.reducer