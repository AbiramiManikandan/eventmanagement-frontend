import axios from 'axios';

// Create an axios instance with base URL
const API = axios.create({ baseURL: 'https://your-backend-url.onrender.com' });

// Add token to headers for authenticated requests
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
