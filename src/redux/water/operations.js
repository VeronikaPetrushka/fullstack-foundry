import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWaterRecord,
  editWaterRecord,
  deleteWaterRecord,
  requestDailyActivity,
  requestMonthActivity,
} from '../services/aquatrackApi.js';

export const dailyActivity = createAsyncThunk(
  'water/day',
  async (data, thunkAPI) => {
    try {
      const res = await requestDailyActivity(data);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const monthActivity = createAsyncThunk(
  'water/month',
  async (data, thunkAPI) => {
    try {
      const res = await requestMonthActivity(data);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const weekActivity = createAsyncThunk(
  'water/week',
  async (data, thunkAPI) => {
    try {
      const res = await requestMonthActivity(data);

      return res;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/add',
  async (formData, thunkAPI) => {
    try {
      const res = await addWaterRecord(formData);

      return {res, dailyNorma: thunkAPI.getState().users.user.dailyNorma};
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/edit',
  async ({ id, formData }, thunkAPI) => {
    try {
      const res = await editWaterRecord(id, formData);

      return {res, dailyNorma: thunkAPI.getState().users.user.dailyNorma};
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/delete',
  async (id, thunkAPI) => {
    try {
      const res = await deleteWaterRecord(id);

      return {res, dailyNorma: thunkAPI.getState().users.user.dailyNorma};
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data.message || err.message);
    }
  }
);
