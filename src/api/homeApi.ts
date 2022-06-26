import { HomeData } from '@interfaces/HomeData';
// import httpClient from '@helpers/httpClient';
// import { apiUrl } from '@configs/environment';
// import { ProductData } from '@interfaces/ProductData';

// export const fetchHomeData = (): Promise<HomeData> =>
//   httpClient.get<HomeData>(`${apiUrl}/home`).then((resp) => {
//     return resp.data;
//   });

export const fetchHomeData = (): HomeData => {
  const products = [
    {
      id: 1,
      name: 'toys1',
      price: 180,
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
      quantity: 0,
      sold: 2,
      category: 'toys',
    },
    {
      id: 2,
      name: 'toys2',
      price: 180,
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
      quantity: 2,
      sold: 2,
      category: 'toys',
    },
    {
      id: 3,
      name: 'toys3',
      price: 180,
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
      quantity: 2,
      sold: 2,
      category: 'toys',
    },
    {
      id: 4,
      name: 'electronics1',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
      category: 'electronics',
    },
    {
      id: 5,
      name: 'electronics2',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 0,
      category: 'electronics',
    },
    {
      id: 6,
      name: 'Furnutire1',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 1,
      category: 'furniture',
    },
    {
      id: 7,
      name: 'Furnutire2',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
  ];

  const categories = [
    {
      id: 1,
      name: 'electronics',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 2,
      name: 'furniture',
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
    },
    {
      id: 3,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 4,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 5,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 6,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 7,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 8,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 9,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 10,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
    {
      id: 11,
      name: 'toys',
      image: 'https://m.media-amazon.com/images/I/81oB0X7+9uL._AC_SL1500_.jpg',
    },
  ];
  return { products, categories };
};
