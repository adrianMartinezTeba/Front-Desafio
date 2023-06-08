import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from './usersService';

// Leer los valores de user y token del localStorage
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user ? user : null,
  token: token ? token : null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const login = createAsyncThunk("users/login", async (registerForm) => {
  try {
    return await usersService.login(registerForm);
  } catch (error) {
    console.error(error);
  }
});

export default usersSlice.reducer;
