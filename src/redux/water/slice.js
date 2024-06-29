import { createSlice } from '@reduxjs/toolkit';
import {
  addWater,
  editWater,
  deleteWater,
  dailyActivity,
  monthActivity,
  weekActivity,
} from './operations.js';

const initialState = {
  waterDaily: [],
  waterMonthly: [],
  waterWeekly: [],
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

    // Handling weekActivity
    builder.addCase(weekActivity.pending, handlePending);
    builder.addCase(weekActivity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.waterWeekly = action.payload;
    });
    builder.addCase(weekActivity.rejected, handleRejected);

    // Handling addWater
    builder.addCase(addWater.pending, handlePending);
    builder.addCase(addWater.fulfilled, (state, action) => {
      const dailyNorma = Number(action.payload.dailyNorma);
      state.isLoading = false;
      state.waterDaily.push(action.payload);
      const totalAmount = state.waterDaily.reduce((total, record) => {
        total + record.amount;
        return total;
      }, 0);
      const index = state.waterMonthly.find(
        record => record.date === action.payload.createdAt.slice(0, 9)
      );
      if (index) {
        state.waterMonthly[index].totalAmount = totalAmount;
        // console.log("user waterNorma", getDailyNorma());
        // TODO: зберігати waterNorma в слайсі води
        // state.waterMonthly[index].percentageOfNorma = (state.users.user.waterNorma / totalAmount * 100).toFixed(0);
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
    });
    builder.addCase(editWater.rejected, handleRejected);

    // Handling deleteWater
    builder.addCase(deleteWater.pending, handlePending);
    builder.addCase(deleteWater.fulfilled, (state, action) => {
      state.isLoading = false;
      const dailyNorma = Number(action.payload.dailyNorma);
      const index = state.waterDaily.findIndex(
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
