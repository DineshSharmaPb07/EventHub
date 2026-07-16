import axios from 'axios';

const API = axios.create({
  // Ngrok URL hatao aur local port 5000 set karo
  baseURL: 'http://localhost:5000', 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;