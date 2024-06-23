import { createSelector } from '@reduxjs/toolkit';

const selectWater = state => state.water;

export const selectWaterAmount = createSelector(
  [selectWater],
  user => user.data?.amount
);

export const selectWaterDate = createSelector(
  [selectWater],
  user => user.data?.date
);

export const selectWaterId = createSelector(
  [selectWater],
  user => user.data?._id
);

export const selectWaterOwner = createSelector(
  [selectWater],
  user => user.data?.owner
);
