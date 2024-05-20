import axios from 'axios';

const api = axios.create({
  baseURL: 'https://study-blitz-backend.onrender.com/',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
