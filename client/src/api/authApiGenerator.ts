import { AxiosInstance } from 'axios';

const authApiGenerator = (api: AxiosInstance) => ({
  loginUser: (creds: { username: string; password: string }) => api.post('/user_token', creds),
  registerUser: (creds: { username: string; password: string; passwordConfirmation: string }) =>
    api.post('/users', creds),
  getUser: (id: number) => api.get(`/users/${id}`)
});

export default authApiGenerator;
