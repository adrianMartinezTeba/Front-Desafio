import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from './usersService';
const initialState = {
  user: '',
  token: '',
};
export const userssSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
  }
})
export const login = createAsyncThunk("users/login", async (registerForm) => {
  try {
    return await usersService.login(registerForm);

  } catch (error) {
    console.error(error);
  }
});
export default userssSlice.reducer