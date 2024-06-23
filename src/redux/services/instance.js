import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://aquatrack-api-myzh.onrender.com/api',
});

// Request interceptor to set the token
instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token'); // Get token from local storage or any other storage method you use
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refreshing
instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const { data } = await instance.post('/auth/refresh', { refreshToken });

        // Update the tokens in local storage
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);

        // Set the new token to the original request and retry it
        originalRequest.headers.Authorization = `Bearer ${data.token}`;
        return instance(originalRequest);
      } catch (refreshError) {
        // Handle refresh token failure (e.g., redirect to login)
        console.error('Refresh token failed', refreshError);
        // Optionally remove the tokens and redirect to the login page
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
