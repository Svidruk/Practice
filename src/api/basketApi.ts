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
      id: 2,
      name: 'toys2',
      price: 180,
      imgUrl: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
      quantity: 2,
      sold: 2,
      category: 'toys',
    },
    {
      id: 3,
      name: 'toys3',
      price: 180,
      imgUrl: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
      quantity: 2,
      sold: 2,
      category: 'toys',
    },
    {
      id: 4,
      name: 'electronics1',
      price: 180,
      imgUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
      category: 'electronics',
    },
    {
      id: 6,
      name: 'Furnutire1',
      price: 180,
      imgUrl:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 1,
      category: 'furniture',
    },
    {
      id: 7,
      name: 'Furnutire2',
      price: 180,
      imgUrl:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
  ];
  return { products };
};
