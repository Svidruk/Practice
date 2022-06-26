import { AsyncData } from '@interfaces/AsyncData';
import { HomeData } from '@interfaces/HomeData';
import { SortInfoData } from '@interfaces/SortInfoData';

export interface State {
  home: AsyncData<HomeData>;
  baseHome: HomeData | null;
  sortInfo: SortInfoData;
}
