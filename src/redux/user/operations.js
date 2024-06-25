import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestUserInfo,
  updateUserProfile,
  uploadUserAvatar,
} from '../services/aquatrackApi.js';
import { setAuthHeader } from '../services/aquatrackApi.js';

export const userInfo = createAsyncThunk('users/current', async thunkAPI => {
  try {
    const res = await requestUserInfo();

    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const updateUserSettings = createAsyncThunk(
  'users/update-user',
  async (formData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);

      const res = await updateUserProfile(formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  'users/avatar',
  async (formData, thunkAPI) => {
    try {
      const res = await uploadUserAvatar(formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
