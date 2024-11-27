import axios from 'axios';
import { APP_URL } from '../constants/global.js';

export const useAxios = () => {
  const axiosInstance = axios.create({
    baseURL: APP_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      console.error('Axios Error:', error);
      return Promise.reject(error);
    }
  );

  return { axios: axiosInstance };
};
