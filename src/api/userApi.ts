import jwt_decode from 'jwt-decode';
import { setAuthToken } from '@helpers/auth';
import httpClient from '@helpers/httpClient';
import { UserData } from '@interfaces/UserData';
import { apiUrl } from '@configs/environment';
import { LoginUserData } from '@interfaces/LoginUserData';
import { RegisterUserData } from '@interfaces/RegisterUserData';

export const fetchCurrentUser = (): Promise<{ data: UserData }> =>
  httpClient.get<{ data: UserData }>(`${apiUrl}/user/auth`).then(({ data }) => data);

export const loginUserHttp = (payload: LoginUserData): Promise<{ data: UserData }> =>
  httpClient.post<{ token: string }>(`${apiUrl}/user/login/`, payload).then(({ data }) => {
    setAuthToken(data.token);
    return jwt_decode(data.token);
  });

export const registrationUser = (payload: RegisterUserData): Promise<{ data: UserData }> =>
  httpClient.post<{ token: string }>(`${apiUrl}/user/registration/`, payload).then(({ data }) => {
    setAuthToken(data.token);
    return jwt_decode(data.token);
  });

export const checkUserValidHttp = (): Promise<{ data: UserData }> =>
  httpClient.get<{ token: string }>(`${apiUrl}/user/auth`).then(({ data }) => {
    setAuthToken(data.token);
    return jwt_decode(data.token);
  });
