import axios from 'axios';

const instance = axios.create();

// Add Authorization to all requests
instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(response => {
  console.log(response);
  return response.data;
});

export default instance;
