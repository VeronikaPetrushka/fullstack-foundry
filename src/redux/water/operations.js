import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterRecord,
  editWaterRecord,
  requestDailyActivity,
  requestMonthActivity,
} from '../services/aquatrackApi.js';

export const dailyActivity = createAsyncThunk('water/day', async thunkAPI => {
  try {
    const res = await requestDailyActivity();

    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const monthActivity = createAsyncThunk('water/month', async thunkAPI => {
  try {
    const res = await requestMonthActivity();

    return res;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const addWater = createAsyncThunk(
  'water/add',
  async (formData, thunkAPI) => {
    try {
      const res = await addWaterRecord(formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/edit',
  async ({ id, formData }, thunkAPI) => {
    try {
      const res = await editWaterRecord(id, formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async ({ id, formData }, thunkAPI) => {
    try {
      const res = await editWaterRecord(id, formData);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
