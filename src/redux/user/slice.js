import { createSlice } from '@reduxjs/toolkit';
import { userInfo, updateUserSettings, uploadAvatar, getTotalUsers } from './operations.js';

const initialState = {
  user: {},
  totalUsers: null,
  isLoading: false,
  isError: null,
  isLoadingAvatar: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    clearError: state => {
      state.isError = null;
    },
  },
  extraReducers: builder => {
    // Handling userInfo
    builder.addCase(userInfo.pending, handlePending);
    builder.addCase(userInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(userInfo.rejected, handleRejected);

    // Handling updateUserSettings
    builder.addCase(updateUserSettings.pending, handlePending);
    builder.addCase(updateUserSettings.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUserSettings.rejected, handleRejected);

    // Handling uploadAvatar
    builder.addCase(uploadAvatar.pending, (state) => {
      state.isLoadingAvatar = true;
    });
    builder.addCase(uploadAvatar.fulfilled, (state, action) => {
      state.isLoadingAvatar = false;
      state.user.avatar = action.payload.avatar;
    });
    builder.addCase(uploadAvatar.rejected, handleRejected);

    // Handling total users request
    builder.addCase(getTotalUsers.pending, handlePending );
    builder.addCase(getTotalUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalUsers = action.payload.totalUsers;
    })
  },
});

export const { clearError } = usersSlice.actions;

const usersReducer = usersSlice.reducer;

export default usersReducer;
