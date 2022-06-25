import { AsyncData } from '@interfaces/AsyncData';
import { HomeData } from '@interfaces/HomeData';

export interface State {
  home: AsyncData<HomeData>;
}
