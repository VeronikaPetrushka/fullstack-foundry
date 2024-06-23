import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestUserInfo,
  updateUserProfile,
  uploadUserAvatar,
} from '../services/aquatrackApi.js';

export const userInfo = createAsyncThunk('users/current', async thunkAPI => {
  try {
    const response = await requestUserInfo();

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateUserSettings = createAsyncThunk(
  'users/update-user',
  async (formData, thunkAPI) => {
    try {
      const response = await updateUserProfile(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  'users/avatar',
  async (formData, thunkAPI) => {
    try {
      const response = await uploadUserAvatar(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
