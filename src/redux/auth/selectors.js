export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => state.auth.isSignedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.isError;
