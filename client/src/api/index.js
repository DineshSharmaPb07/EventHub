import axios from 'axios';

const API = axios.create({
  // Yahan direct AWS IP daal do testing ke liye
  baseURL: 'http://13.203.97.69:5000', 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;