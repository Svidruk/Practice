import { AsyncData } from '@interfaces/AsyncData';
import { HomeData } from '@interfaces/HomeData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import { getHomeData } from '../redux/actions';

export const useHomeData = (): {
  homeData: AsyncData<HomeData>;
} => {
  const homeData = useSelector<RootState, AsyncData<HomeData>>((state) => state.homeReducer.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeData({ limit: 10, offset: 0 }));
  }, []);

  return { homeData };
};
