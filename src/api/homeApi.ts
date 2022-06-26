import { HomeData } from '@interfaces/HomeData';
import { PaginationData } from '@interfaces/PaginationData';
// import httpClient from '@helpers/httpClient';
// import { apiUrl } from '@configs/environment';
// import { ProductData } from '@interfaces/ProductData';

// export const fetchHomeData = (params: PaginationData): HomeData => {
//   httpClient.get<HomeData>(`${apiUrl}/home`, {
//     params,
//   }).then((resp) => {
//     return resp.data;
//   });

export const fetchHomeData = (params: PaginationData): HomeData => {
  let products = [
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
    {
      id: 8,
      name: 'Furnutire3',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 9,
      name: 'Furnutire4',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 10,
      name: 'Furnutire5',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 11,
      name: 'Furnutire6',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 12,
      name: 'Furnutire7',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 13,
      name: 'Furnutire8',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 14,
      name: 'Furnutire9',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 15,
      name: 'Furnutire10',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 16,
      name: 'Furnutire11',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 17,
      name: 'Furnutire12',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 18,
      name: 'Furnutire13',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 19,
      name: 'Furnutire14',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 20,
      name: 'Furnutire15',
      price: 180,
      image:
        'https://media.architecturaldigest.com/photos/5f4e9c54072307c75638c0f1/1:1/w_1280%2Cc_limit/Screen%2520Shot%25202020-09-01%2520at%25203.08.43%2520PM.png',
      quantity: 2,
      category: 'furniture',
    },
    {
      id: 21,
      name: 'Furnutire16',
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

  products = products.slice(params.offset, params.offset + params.limit);
  return { products, categories };
};
