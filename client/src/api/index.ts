import axios from './axios';
import fieldApiGenerator from './fieldApiGenerator';
import authApiGenerator from './authApiGenerator';

const fieldApi = fieldApiGenerator(axios);
const authApi = authApiGenerator(axios);

export { axios, authApi, fieldApi };
