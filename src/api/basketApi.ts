import { BasketData } from '@interfaces/BasketData';
import httpClient from '@helpers/httpClient';
import { apiUrl } from '@configs/environment';
import { ChangeProductData } from '@interfaces/ChangeProductData';

export const fetchBasketData = (): Promise<BasketData> =>
  httpClient.get<BasketData>(`${apiUrl}/user/get-cart`).then((resp) => {
    return resp.data;
  });

export const changeProductQuantity = (productData: ChangeProductData): Promise<void> =>
  httpClient.patch<void>(`${apiUrl}/user/cart-product-count`, productData).then(({ data }) => data);

export const deleteProduct = (productId: number): void => {
  httpClient.delete(`${apiUrl}/user/cart-product-delete`, { params: { productId } });
};

export const postProduct = (productId: number): void => {
  httpClient.post<void>(`${apiUrl}/user/cart-add`, { productId });
};
