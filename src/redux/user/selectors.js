export const selectUserInfo = state => state.users.user;

export const selectUserCount = state => state.users.totalUsers;
export const selectIsLoading = state => state.users.isLoading;
export const selectIsError = state => state.users.isError;
