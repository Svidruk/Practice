import { AsyncData } from '@interfaces/AsyncData';
import { BasketData } from '@interfaces/BasketData';

export interface State {
  basket: AsyncData<BasketData>;
  isBasketOpen: boolean;
}
