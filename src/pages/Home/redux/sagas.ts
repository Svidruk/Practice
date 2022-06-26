import { DataState } from '@enums/DataState';
import { HomeData } from '@interfaces/HomeData';
import { fetchHomeData } from '@api/homeApi';
import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import { getHomeData, setHomeData, setHomeDataLoading } from './actions';
import { RootState } from 'redux/store';
import { ProductData } from '@interfaces/ProductData';

function* getHomeDataAsync({ payload }: ReturnType<typeof getHomeData>) {
  const baseProducts: ProductData[] = yield select((state: RootState) => state.homeReducer.baseProducts);
  const setLoadingAction = setHomeDataLoading();
  yield put(setLoadingAction);
  try {
    const response: HomeData = yield call(fetchHomeData, payload);
    const setHomeDataAction = setHomeData({
      data:
        baseProducts && !baseProducts.some((product) => product.id === response.products[0].id)
          ? { ...response, products: [...baseProducts, ...response.products] }
          : response,
      state: DataState.Fulfilled,
    });
    yield put(setHomeDataAction);
  } catch {
    // console.log('Something went wrong while fetching home data');
    yield put(
      setHomeData({
        data: null,
        state: DataState.Rejected,
      })
    );
  }
}

function* watchGetHomeData() {
  yield takeLatest(getHomeData.type, getHomeDataAsync);
}

export function* homeSaga(): Generator {
  yield all([watchGetHomeData()]);
}
