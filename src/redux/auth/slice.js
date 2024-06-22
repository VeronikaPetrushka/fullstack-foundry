import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, login } from '../auth/operations';

const INITIAL_STATE = {
  user: {
    email: null,
    password: null,
    repeatPassword: null,
  },
  token: null,
  isSignedIn: false,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      // REGISTER
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      //LOGIN
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addMatcher(isAnyOf(register.pending, login.pending), state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addMatcher(isAnyOf(register.rejected, login.rejected), state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const authReducer = authSlice.reducer;
