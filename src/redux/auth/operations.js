import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  refreshToken,
  requestForgotPassword,
  requestGoogleLogin,
  requestLogin,
  requestLogout,
  requestRegister,
  requestResendVerify,
  requestResetPassword,
  requestSendVerify,
} from '../services/aquatrackApi.js';

export const register = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await requestRegister(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (formData, thunkAPI) => {
    try {
      const response = await requestLogin(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

// ADDITIONAL

export const loginGoogle = createAsyncThunk(
  'auth/loginGoogle',
  async (formData, thunkAPI) => {
    try {
      const response = await requestGoogleLogin(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const tokenRefresh = createAsyncThunk(
  'auth/refresh',
  async (formData, thunkAPI) => {
    try {
      const response = await refreshToken(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (formData, thunkAPI) => {
    try {
      await requestLogout(formData);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const sendVerify = createAsyncThunk(
  'auth/verify',
  async ({ verificationToken, formData }, thunkAPI) => {
    try {
      const response = await requestSendVerify(verificationToken, formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const resendVerify = createAsyncThunk(
  'auth/re-verify',
  async (formData, thunkAPI) => {
    try {
      const response = await requestResendVerify(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgot-password',
  async (formData, thunkAPI) => {
    try {
      const response = await requestForgotPassword(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/reset-password',
  async (formData, thunkAPI) => {
    try {
      const response = await requestResetPassword(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
