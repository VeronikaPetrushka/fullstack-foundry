import axios from 'axios';

const API_URI = 'https://aquatrack-api-myzh.onrender.com/api';
// const API_URI = 'http://localhost:8080/api';

const headerConfig = {
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const publicInstance = axios.create({ ...headerConfig, baseURL: API_URI });
export const instance = axios.create({ ...headerConfig, baseURL: API_URI });

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => response,

  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axios.get(
          `${API_URI}/auth/refresh`,
          headerConfig
        );

        localStorage.setItem('token', data.token);

        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Refresh token failed', refreshError);
        localStorage.removeItem('token');
        window.location.href = '/signin';
      }
    }

    return Promise.reject(error);
  }
);
