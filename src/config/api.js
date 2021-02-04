import axios from 'axios';
import ErrorInterceptor from './interceptors/ErrorInterceptor';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

api.interceptors.response.use((response) => response, ErrorInterceptor);

export default api;
