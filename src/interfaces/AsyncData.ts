import { DataState } from '../enums/DataState';
import { ErrorInfoData } from './ErrorInfoData';

export interface AsyncData<T> {
  data: T | null;
  state: DataState;
  error?: ErrorInfoData;
}
