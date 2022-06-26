import { AsyncData } from '@interfaces/AsyncData';
import { HomeData } from '@interfaces/HomeData';
import { SortInfoData } from '@interfaces/SortInfoData';
import { ProductData } from '@interfaces/ProductData';

export interface State {
  home: AsyncData<HomeData>;
  baseProducts: ProductData[] | null;
  sortInfo: SortInfoData;
}
