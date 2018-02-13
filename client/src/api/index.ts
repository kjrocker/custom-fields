import axios from './axios';
import fieldApiGenerator from './fieldApi';
import authApiGenerator from './authApi';

const fieldApi = fieldApiGenerator(axios);
const authApi = authApiGenerator(axios);

export { axios, authApi, fieldApi };
