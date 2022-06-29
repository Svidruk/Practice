import { AsyncData } from '@interfaces/AsyncData';
import { BasketData } from '@interfaces/BasketData';
import { createAction } from '@reduxjs/toolkit';
import { ChangeProductData } from '@interfaces/ChangeProductData';

export const setIsBasketOpen = createAction('basket/setIsBasketOpen');
export const getBasketData = createAction('basket/getBasketData');
export const setBasketData = createAction<AsyncData<BasketData>>('basket/setBasketData');
export const setBasketDataLoading = createAction('basket/setBasketDataLoading');
export const changeProductQuantityAction = createAction<ChangeProductData>('basket/changeProductQuantityAction');
export const removeProductAction = createAction<number>('basket/removeProductAction');
export const addProductAction = createAction<number>('basket/addProductAction');
