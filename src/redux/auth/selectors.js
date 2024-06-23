export const selectUser = state => state.auth.user;
export const selectIsSignedIn = state => state.auth.isSignedIn;
export const selectIsLoading = state => state.auth.isLoading;
export const selectIsError = state => state.auth.isError;
export const selectToken = state => state.auth.token;
export const selectEmail = state => state.auth.email;
export const selectPassword = state => state.auth.password;
export const selectResetPassword = state => state.auth.resetPassword;
