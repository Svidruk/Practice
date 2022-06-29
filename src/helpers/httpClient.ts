import axios from 'axios';
import { getAuthToken } from './auth';
import { apiUrl } from '@configs/environment';

const httpClient = axios.create({
  baseURL: apiUrl,
  headers: { Accept: 'Application/Json' },
});

httpClient.interceptors.request.use((config) => {
  const token = getAuthToken();
  const newConfig = { ...config, headers: { ...config.headers, Authorization: `Bearer ${token}` } };
  return newConfig;
});

export default httpClient;
