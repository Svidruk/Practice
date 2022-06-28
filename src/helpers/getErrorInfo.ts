import { ErrorInfoData } from '@interfaces/ErrorInfoData';
import { AxiosError, AxiosResponse } from 'axios';

export const getErrorInfo = (error: AxiosError): ErrorInfoData => {
  const err = error as AxiosError;
  const response = err.response as AxiosResponse;
  const errorMessage: string = response.data.message;
  const errorCode = err.response?.status;
  return { code: errorCode, message: errorMessage };
};
