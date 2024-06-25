import axios from 'axios';

сonst API_URI = 'https://aquatrack-api-myzh.onrender.com/api';
  //const API_URI = 'http://localhost:8080/api';


const instance = axios.create({
  baseURL: API_URI,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
});

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
        
        const { data } = await axios.get(`${API_URI}/auth/refresh`, {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        });

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

export default instance;
