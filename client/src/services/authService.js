import API from '../api'; // Agar path thoda alag ho toh folder structure ke hisab se relative path dekh lena

export const authService = {
  register: async (userData) => {
    // Ye automatic 'http://13.203.97.69:5000/api/auth/register' par request bhejega
    const response = await API.post('/api/auth/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    // Ye automatic 'http://13.203.97.69:5000/api/auth/login' par request bhejega
    const response = await API.post('/api/auth/login', credentials);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  }
};