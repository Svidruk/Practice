import { fetchProductData } from '@api/productApi';
import { DataState } from '@enums/DataState';
import { ProductDescriptionData } from '@interfaces/ProductDescriptionData';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getProductDescriptionData, setProductDescriptionData, setProductDescriptionDataLoading } from './actions';

function* getProductDescriptionDataAsync({ payload }: ReturnType<typeof getProductDescriptionData>) {
  const setLoadingAction = setProductDescriptionDataLoading();
  yield put(setLoadingAction);
  try {
    const response: ProductDescriptionData = yield call(fetchProductData, payload);
    const setProductDescriptionDataAction = setProductDescriptionData({
      data: response,
      state: DataState.Fulfilled,
    });
    yield put(setProductDescriptionDataAction);
  } catch {
    // console.log('Something went wrong while fetching product data');
  }
}
function* watchGetProductDescriptionData() {
  yield takeLatest(getProductDescriptionData.type, getProductDescriptionDataAsync);
}

export function* productdescriptionSaga(): Generator {
  yield all([watchGetProductDescriptionData()]);
}
