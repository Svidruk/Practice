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
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
    },
    {
      id: 2,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
    },
    {
      id: 3,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
    },
    {
      id: 4,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
      sold: 2,
    },
    {
      id: 5,
      name: 'Wiley Saddle Bag - Fossil',
      price: 180,
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
      quantity: 2,
    },
  ];

  const categories = [
    {
      id: 1,
      name: 'Toys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 2,
      name: 'Boys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 3,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 4,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 5,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 6,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 7,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 8,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 9,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 10,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
    {
      id: 11,
      name: 'Loys',
      image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
    },
  ];
  return { products, categories };
};
