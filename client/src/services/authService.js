import API from '../api';

export const authService = {
  register: async (userData) => {
    const response = await API.post('/api/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await API.post('/api/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  // Ye naya function add kar diya
  logout: () => {
    localStorage.removeItem('token');
  }
};