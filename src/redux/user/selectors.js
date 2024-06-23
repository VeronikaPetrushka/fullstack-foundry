import { createSelector } from '@reduxjs/toolkit';

const selectUser = state => state.user;

export const selectUserName = createSelector(
  [selectUser],
  user => user.data?.name
);

export const selectUserEmail = createSelector(
  [selectUser],
  user => user.data?.email
);

export const selectDailyNorma = createSelector(
  [selectUser],
  user => user.data?.dailyNorma
);

export const selectGender = createSelector(
  [selectUser],
  user => user.data?.gender
);

export const selectWeight = createSelector(
  [selectUser],
  user => user.data?.weight
);

export const selectTimeActivity = createSelector(
  [selectUser],
  user => user.data?.timeActivity
);
