import { AxiosInstance } from 'axios';
import { stringify } from 'qs';

const fieldApiGenerator = (api: AxiosInstance) => ({
  getFields: (tags?: Array<number>) => {
    const queryParams = tags ? '?' + stringify({ tags }, { arrayFormat: 'brackets', encode: false }) : '';
    console.log(queryParams);
    return api.get(`/fields${queryParams}`);
  },
  getValidations: () => api.get('/validations'),
  getTags: () => api.get('/tags')
});

export default fieldApiGenerator;
