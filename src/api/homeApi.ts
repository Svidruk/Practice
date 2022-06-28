import { PaginationData } from '@interfaces/PaginationData';
import httpClient from '@helpers/httpClient';
import { apiUrl } from '@configs/environment';
import { HomeData } from '@interfaces/HomeData';

export const fetchHomeData = (params: PaginationData): Promise<HomeData> =>
  httpClient
    .get<HomeData>(`${apiUrl}/product/home`, {
      params,
    })
    .then((resp) => {
      return resp.data;
    });
