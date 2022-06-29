import httpClient from '@helpers/httpClient';
import { apiUrl } from '@configs/environment';
import { ProductDescriptionData } from '@interfaces/ProductDescriptionData';

export const fetchProductData = (id: number): Promise<ProductDescriptionData> =>
  httpClient.get<ProductDescriptionData>(`${apiUrl}/product/${id}`).then((resp) => {
    return resp.data;
  });
