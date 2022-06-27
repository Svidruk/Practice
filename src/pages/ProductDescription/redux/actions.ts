import { AsyncData } from '@interfaces/AsyncData';
import { ProductDescriptionData } from '@interfaces/ProductDescriptionData';
import { createAction } from '@reduxjs/toolkit';

export const getProductDescriptionData = createAction<number>('productDescription/getProductDescriptionData');
export const setProductDescriptionData = createAction<AsyncData<ProductDescriptionData>>(
  'productDescription/setProductDescriptionData'
);
export const setProductDescriptionDataLoading = createAction('productDescription/setProductDescriptionDataLoading');
