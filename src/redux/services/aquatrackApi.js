import { instance, publicInstance } from './instance';

//AUTH
export const requestRegister = async formData => {
  const { data } = await publicInstance.post('/auth/register', formData);
  return data;
};

export const requestLogin = async formData => {
  const { data } = await publicInstance.post('/auth/login', formData);
  return data;
};

export const requestGoogleLogin = async formData => {
  const { data } = await publicInstance.get('/auth/google', {
    params: formData,
  });
  return data;
};

export const refreshToken = async () => {
  const { data } = await publicInstance.get('/auth/refresh');
  return data;
};

export const requestLogout = async () => {
  const { data } = await instance.post('/auth/logout');
  return data;
};

export const requestSendVerify = async (verificationToken, formData) => {
  const { data } = await publicInstance.post(
    `/auth/verify/${verificationToken}`,
    formData
  );
  return data;
};

export const requestResendVerify = async formData => {
  const { data } = await publicInstance.post('/auth/verify', formData);
  return data;
};

export const requestForgotPassword = async formData => {
  const { data } = await publicInstance.post('/auth/forgot-password', formData);
  return data;
};

export const requestResetPassword = async formData => {
  const { data } = await publicInstance.post('/auth/reset-password', formData);
  return data;
};

// USER
export const requestTotalUsers = async () => {
  const { data } = await publicInstance.get('users/count-users');
  return data;
};

export const requestUserInfo = async () => {
  const { data } = await instance.get('/users/current');
  return data;
};

export const updateUserProfile = async formData => {
  const { data } = await instance.patch('/users/current', formData);
  return data;
};

export const uploadUserAvatar = async formData => {
  const { data } = await instance.patch('/users/avatar', formData);
  return data;
};

// WATER

export const requestDailyActivity = async formData => {
  const { data } = await instance.post('/water/day', formData);
  return data;
};

export const requestMonthActivity = async formData => {
  const { data } = await instance.post('/water/month', formData);
  return data;
};

export const addWaterRecord = async formData => {
  const { data } = await instance.post('/water/', formData);
  return data;
};

export const editWaterRecord = async (id, formData) => {
  const { data } = await instance.put(`/water/${id}`, formData);
  return data;
};

export const deleteWaterRecord = async (id) => {
  const { data } = await instance.delete(`/water/${id}`);
  return data;
};
