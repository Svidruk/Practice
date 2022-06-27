import { AsyncData } from '@interfaces/AsyncData';
import { ProductDescriptionData } from '@interfaces/ProductDescriptionData';

export interface State {
  productDescription: AsyncData<ProductDescriptionData>;
}
