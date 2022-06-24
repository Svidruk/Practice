import { DataState } from '@enums/DataState';
import { BasketData } from '@interfaces/BasketData';
import { changeProductQuantity, deleteProduct, fetchBasketData } from '@api/basketApi';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  getBasketData,
  setBasketData,
  setBasketDataLoading,
  changeProductQuantityAction,
  removeProductAction,
} from './actions';
import { RootState } from 'redux/store';

function* getBasketDataAsync() {
  const setLoadingAction = setBasketDataLoading();
  yield put(setLoadingAction);
  try {
    const response: BasketData = yield call(fetchBasketData);
    const setBasketDataAction = setBasketData({ data: response, state: DataState.Fulfilled });
    yield put(setBasketDataAction);
  } catch {
    // console.log('Something went wrong while fetching basket data');
    yield put(
      setBasketData({
        data: null,
        state: DataState.Rejected,
      })
    );
  }
}

function* changeProductQuantityActionAsync({ payload }: ReturnType<typeof changeProductQuantityAction>) {
  try {
    let basketData: BasketData = yield select((state: RootState) => state.basketReducer.basket.data);
    basketData = JSON.parse(JSON.stringify(basketData));
    const setBasketDataAction = setBasketData({
      data: {
        ...basketData,
        products: basketData.products.map((product) => {
          if (product.id === payload.id) product.quantity = payload.quantity;
          return product;
        }),
      },
      state: DataState.Fulfilled,
    });
    yield put(setBasketDataAction);
    yield call(changeProductQuantity, payload);
  } catch {
    // console.log('Something went wrong while changing data');
  }
}

function* removeProductActionAsync({ payload }: ReturnType<typeof removeProductAction>) {
  try {
    const basketData: BasketData = yield select((state: RootState) => state.basketReducer.basket.data);
    const setBasketDataAction = setBasketData({
      data: {
        ...basketData,
        products: basketData.products.filter((product) => product.id !== payload),
      },
      state: DataState.Fulfilled,
    });
    yield put(setBasketDataAction);
    yield call(deleteProduct, payload);
  } catch {
    // console.log('Something went wrong while delete product from basket');
  }
}

function* watchGetBasketData() {
  yield takeLatest(getBasketData.type, getBasketDataAsync);
  yield takeLatest(changeProductQuantityAction.type, changeProductQuantityActionAsync);
  yield takeLatest(removeProductAction.type, removeProductActionAsync);
}

export function* basketSaga(): Generator {
  yield all([watchGetBasketData()]);
}
