import React, { createContext, useContext } from 'react';
import axios from 'axios';
import { getEnvValue } from '@/utils/configUtils';

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const axiosInstance = axios.create({
    baseURL: getEnvValue('EXPO_PUBLIC_API_URL'),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      // const token =
      // if (token) {
      //     config.headers.Authorization = `Bearer ${token}`;
      // }
      console.log('Request Interceptor:', config);
      return config;
    },
    (error) => {
      console.error('Request Interceptor Error:', error);
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      console.log('Response Interceptor:', response);
      return response;
    },
    (error) => {
      console.error('Response Interceptor Error:', error);
      if (error.response?.status === 401) {
        // Handle unauthorized errors (e.g., redirect to login)
        console.log('Unauthorized, redirecting to login...');
      }
      return Promise.reject(error);
    }
  );

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(AxiosContext);
};
