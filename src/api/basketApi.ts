import { BasketData } from '@interfaces/BasketData';
import httpClient from '@helpers/httpClient';
import { apiUrl } from '@configs/environment';
import { ProductData } from '@interfaces/ProductData';

// export const fetchBasketData = (): Promise<BasketData> =>
//   httpClient.get<BasketData>(`${apiUrl}/basket`).then((resp) => {
//     return resp.data;
//   });

export const changeProductQuantity = (productData: ProductData): Promise<void> =>
  httpClient.post<void>(`${apiUrl}/basket`, productData).then(({ data }) => data);

export const deleteProduct = (productId: number): void => {
  httpClient.delete<void>(`${apiUrl}/basket/${productId}`);
};

export const fetchBasketData = (): BasketData => {
  const products = [
    {
      id: 1,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
    {
      id: 2,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
    {
      id: 3,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
    {
      id: 4,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
    {
      id: 5,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
  ];
  return { products };
};
