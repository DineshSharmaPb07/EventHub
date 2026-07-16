import axios from 'axios';

const API = axios.create({
  // Yahan tera naya secure Ngrok URL paste ho gaya
  baseURL: 'https://your-unique-subdomain.ngrok-free.dev', 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;