import axios from './axios';
import fieldApiGenerator from './fieldApiGenerator';

const fieldApi = fieldApiGenerator(axios);

export { axios, fieldApi };
