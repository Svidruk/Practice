import { AsyncData } from '@interfaces/AsyncData';
import { BasketData } from '@interfaces/BasketData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import { getBasketData } from '../redux/actions';

export const useBasketData = (): {
  basketData: AsyncData<BasketData>;
} => {
  const basketData = useSelector<RootState, AsyncData<BasketData>>((state) => state.basketReducer.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!basketData.data) dispatch(getBasketData());
  }, []);
  return { basketData };
};
