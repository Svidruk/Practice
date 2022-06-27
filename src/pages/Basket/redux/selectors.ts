import { RootState } from '@redux/store';

export const getIsBasketOpen = (state: RootState): boolean => state.basketReducer.isBasketOpen;
