import { AxiosInstance } from 'axios';

const fieldApiGenerator = (api: AxiosInstance) => ({
  getFields: () => api.get('/fields'),
  getValidations: () => api.get('/validations'),
  getTags: () => api.get('/tags')
});

export default fieldApiGenerator;
