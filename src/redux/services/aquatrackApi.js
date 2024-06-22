import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aquatrack-api-myzh.onrender.com/api',
});

//AUTH
export const requestRegister = async formData => {
  const { data } = await instance.post('/auth/register', formData);

  return data;
};

export const requestLogin = async formData => {
  const { data } = await instance.post('/auth/login', formData);

  return data;
};
