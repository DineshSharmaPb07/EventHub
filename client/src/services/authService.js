import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const authService = {
  login: async (credentials) => {
    // Real API request to backend for authentication
    const response = await axios.post(`${API_URL}/login`, credentials);
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('current_user', JSON.stringify(response.data.user));
    }
    
    return response.data;
  },

  register: async (userData) => {
    // Real API request to backend for registration
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('current_user');
  }
};
