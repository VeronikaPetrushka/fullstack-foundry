import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestLogin, requestRegister } from 'redux/services/aquatrackApi';

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
