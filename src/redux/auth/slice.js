import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signup,
  login,
  loginGoogle,
  tokenRefresh,
  logout,
} from './operations.js';

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

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder => {
    builder
      // LOGIN WITH GOOGLE
      .addCase(loginGoogle.pending, handlePending)
      .addCase(loginGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
      .addCase(loginGoogle.rejected, handleRejected)
      // TOKEN REFRESH
      .addCase(tokenRefresh.pending, handlePending)
      .addCase(tokenRefresh.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
      })
      .addCase(tokenRefresh.rejected, handleRejected)
      // LOGOUT
      .addCase(logout.pending, handlePending)
      .addCase(logout.fulfilled, state => {
        state.isLoading = false;
        state.user = INITIAL_STATE.user;
        state.token = null;
        state.isSignedIn = false;
      })
      .addCase(logout.rejected, handleRejected)
      // REGISTER
      .addCase(signup.fulfilled, (state, action) => {
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
      .addMatcher(isAnyOf(signup.pending, login.pending), handlePending)
      .addMatcher(isAnyOf(signup.rejected, login.rejected), handleRejected);
  },
});

export const authReducer = authSlice.reducer;
