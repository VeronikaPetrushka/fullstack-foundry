import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  editWater,
  deleteWater,
  dailyActivity,
  monthActivity,
} from './operations.js';

const initialState = {
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
      state.waterDaily = action.payload;
    });
    builder.addCase(dailyActivity.rejected, handleRejected);

    // Handling monthActivity
    builder.addCase(monthActivity.pending, handlePending);
    builder.addCase(monthActivity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waterMonthly = action.payload;
    });
    builder.addCase(monthActivity.rejected, handleRejected);

    // Handling addWater
    builder.addCase(addWater.pending, handlePending);
    builder.addCase(addWater.fulfilled, (state, action) => {
      const dailyNorma = Number(action.payload.dailyNorma);
      state.isLoading = false;
      state.waterDaily.push(action.payload.res);
      const totalAmount = state.waterDaily.reduce(
        (total, record) => total + record.amount,
        0
      );
      const mIndex = state.waterMonthly.findIndex(
        record =>
          record.date.slice(0, 10) === action.payload.res.date.slice(0, 10)
      );
      const percentageOfNorma =
        totalAmount > dailyNorma
          ? 100
          : Number(((totalAmount / dailyNorma) * 100).toFixed(0));
      if (mIndex !== -1) {
        state.waterMonthly[mIndex].totalAmount = totalAmount;
        state.waterMonthly[mIndex].percentageOfNorma = percentageOfNorma;
      }
      if (mIndex === -1) {
        state.waterMonthly.push({
          totalAmount,
          percentageOfNorma,
          date: action.payload.res.date,
        });
      }
    });
    builder.addCase(addWater.rejected, handleRejected);

    // Handling editWater
    builder.addCase(editWater.pending, handlePending);
    builder.addCase(editWater.fulfilled, (state, action) => {
      state.isLoading = false;
      const dailyNorma = Number(action.payload.dailyNorma);
      const index = state.waterDaily.findIndex(
        record => record._id === action.payload.res._id
      );
      if (index !== -1) {
        state.waterDaily[index] = action.payload.res;
      }

      const totalAmount = state.waterDaily.reduce(
        (total, record) => total + record.amount,
        0
      );
      const mIndex = state.waterMonthly.findIndex(
        record =>
          record.date.slice(0, 10) === action.payload.res.date.slice(0, 10)
      );
      const percentageOfNorma =
        totalAmount > dailyNorma
          ? 100
          : Number(((totalAmount / dailyNorma) * 100).toFixed(0));
      if (mIndex !== -1) {
        state.waterMonthly[mIndex].totalAmount = totalAmount;
        state.waterMonthly[mIndex].percentageOfNorma = percentageOfNorma;
      }
    });
    builder.addCase(editWater.rejected, handleRejected);

    // Handling deleteWater
    builder.addCase(deleteWater.pending, handlePending);
    builder.addCase(deleteWater.fulfilled, (state, action) => {
      state.isLoading = false;
      const dailyNorma = Number(action.payload.dailyNorma);
      const index = state.waterDaily.findIndex(
        record => record._id === action.meta.arg.id
      );
      const deletedData = state.waterDaily[index];
      state.waterDaily.splice(index, 1);

      const totalAmount = state.waterDaily.reduce(
        (total, record) => total + record.amount,
        0
      );
      const mIndex = state.waterMonthly.findIndex(
        record => record.date.slice(0, 10) === deletedData.date.slice(0, 10)
      );
      const percentageOfNorma =
        totalAmount > dailyNorma
          ? 100
          : Number(((totalAmount / dailyNorma) * 100).toFixed(0));
      if (mIndex !== -1) {
        if (totalAmount === 0) {
          state.waterMonthly.splice(mIndex, 1);
        } else {
          state.waterMonthly[mIndex].totalAmount = totalAmount;
          state.waterMonthly[mIndex].percentageOfNorma = percentageOfNorma;
        }
      }
    });
    builder.addCase(deleteWater.rejected, handleRejected);
  },
});

export const { clearError } = waterSlice.actions;

const waterReducer = waterSlice.reducer;

export default waterReducer;
