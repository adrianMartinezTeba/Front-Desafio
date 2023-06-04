import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from './usersService';
const initialState = {
  user: user ? user : null,
  token: token ? token : null,
};
export const productsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
  }
})
export const register = createAsyncThunk("users/register", async (registerForm) => {
  try {
    return await usersService.register(registerForm);
  } catch (error) {
    console.error(error);
  }
});
export default productsSlice.reducer