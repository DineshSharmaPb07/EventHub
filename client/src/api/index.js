import axios from 'axios';

const API = axios.create({
  // Ab target server ka IP vercel.json handle karega, yahan bas relative path rahega
  baseURL: '', 
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;