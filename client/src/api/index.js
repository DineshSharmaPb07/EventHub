import axios from 'axios';

const API = axios.create({
  // Direct full absolute path back to AWS
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