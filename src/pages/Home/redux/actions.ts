import { AsyncData } from '@interfaces/AsyncData';
import { HomeData } from '@interfaces/HomeData';
import { createAction } from '@reduxjs/toolkit';

export const getHomeData = createAction('home/getHomeData');
export const setHomeData = createAction<AsyncData<HomeData>>('home/setHomeData');
export const setHomeDataLoading = createAction('home/setHomeDataLoading');
