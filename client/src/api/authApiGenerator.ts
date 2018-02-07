import { AxiosInstance } from 'axios';

const authApiGenerator = (api: AxiosInstance) => ({
  loginUser: (creds: { email: string; password: string }) => api.post('/user_token', creds),
  registerUser: (creds: { email: string; password: string; passwordConfirmation: string }) => api.post('/users', creds),
  getUser: (id: number) => api.get(`/users/${id}`)
});

export default authApiGenerator;
