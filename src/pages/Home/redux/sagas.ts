import { DataState } from '@enums/DataState';
import { HomeData } from '@interfaces/HomeData';
import { fetchHomeData } from '@api/homeApi';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getHomeData, setHomeData, setHomeDataLoading } from './actions';

function* getHomeDataAsync() {
  const setLoadingAction = setHomeDataLoading();
  yield put(setLoadingAction);
  try {
    const response: HomeData = yield call(fetchHomeData);
    const setHomeDataAction = setHomeData({ data: response, state: DataState.Fulfilled });
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
