import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  dailyActivity,
  deleteWater,
  editWater,
  monthActivity,
} from './operations.js';

const initialState = {
  waterRecords: [],
  waterDaily: [],
  waterMonthly: [],
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

const waterSlice = createSlice({
  name: 'water',
  initialState,
  reducers: {
    clearError: state => {
      state.isError = null;
    },
  },
  extraReducers: builder => {
    // Handling dailyActivity
    builder.addCase(dailyActivity.pending, handlePending);
    builder.addCase(dailyActivity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waterDaily = action.payload.waterDaily;
    });
    builder.addCase(dailyActivity.rejected, handleRejected);

    // Handling monthActivity
    builder.addCase(monthActivity.pending, handlePending);
    builder.addCase(monthActivity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waterMonthly = action.payload.waterMonthly;
    });
    builder.addCase(monthActivity.rejected, handleRejected);

    // Handling addWater
    builder.addCase(addWater.pending, handlePending);
    builder.addCase(addWater.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waterRecords.push(action.payload);
    });
    builder.addCase(addWater.rejected, handleRejected);

    // Handling editWater
    builder.addCase(editWater.pending, handlePending);
    builder.addCase(editWater.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.waterRecords.findIndex(
        record => record._id === action.payload._id
      );
      if (index !== -1) {
        state.waterRecords[index] = action.payload;
      }
    });
    builder.addCase(editWater.rejected, handleRejected);

    // Handling deleteWater
    builder.addCase(deleteWater.pending, handlePending);
    builder.addCase(deleteWater.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.waterRecords.findIndex(
        record => record._id === action.payload._id
      );
      state.items.splice(index, 1);
    });
    builder.addCase(deleteWater.rejected, handleRejected);
  },
});

export const { clearError } = waterSlice.actions;

const waterReducer = waterSlice.reducer;

export default waterReducer;
