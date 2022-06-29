import { AsyncData } from '@interfaces/AsyncData';
import { LoginUserData } from '@interfaces/LoginUserData';
import { createAction } from '@reduxjs/toolkit';
import { UserData } from '../../interfaces/UserData';
import { RegisterUserData } from './../../interfaces/RegisterUserData';

export const setCurrentUser = createAction<AsyncData<UserData>>('user/setCurrentUser');
export const getCurrentUser = createAction<void>('user/getCurrentUser');
export const registerUser = createAction<RegisterUserData>('user/registerUser');
export const loginUser = createAction<LoginUserData>('user/loginUser');
