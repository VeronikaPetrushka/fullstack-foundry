import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterRecord,
  editWaterRecord,
  requestDailyActivity,
  requestMonthActivity,
} from '../services/aquatrackApi.js';

export const dailyActivity = createAsyncThunk('water/day', async thunkAPI => {
  try {
    const response = await requestDailyActivity();

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const monthActivity = createAsyncThunk('water/month', async thunkAPI => {
  try {
    const response = await requestMonthActivity();

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addWater = createAsyncThunk(
  'water/add',
  async (formData, thunkAPI) => {
    try {
      const response = await addWaterRecord(formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/edit',
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await editWaterRecord(id, formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async ({ id, formData }, thunkAPI) => {
    try {
      const response = await editWaterRecord(id, formData);

      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
