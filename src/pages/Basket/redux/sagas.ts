import { DataState } from '@enums/DataState';
import { BasketData } from '@interfaces/BasketData';
import { changeProductQuantity, deleteProduct, fetchBasketData, postProduct } from '@api/basketApi';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  getBasketData,
  setBasketData,
  setBasketDataLoading,
  changeProductQuantityAction,
  removeProductAction,
  addProductAction,
} from './actions';
import { RootState } from '@redux/store';
import { ProductData } from '@interfaces/ProductData';
import { ChangeProductData } from '@interfaces/ChangeProductData';

const changeProductQuantityHelper = (productToChange: ChangeProductData, products: ProductData[]) => {
  if (products && products.find((product) => product.id === productToChange.productId)) {
    return products.map((product) => {
      if (product.id === productToChange.productId) {
        productToChange.sign === '+'
          ? (product.quantity = product.quantity + 1)
          : (product.quantity = product.quantity - 1);
      }
      return product;
    });
  } else {
    return products;
  }
};

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
    const basketData: BasketData = yield select((state: RootState) => state.basketReducer.basket.data);
    const newBasketData: BasketData = JSON.parse(JSON.stringify(basketData));
    const setBasketDataAction = setBasketData({
      data: {
        ...newBasketData,
        products: changeProductQuantityHelper(payload, newBasketData.products),
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

function* addProductActionAsync({ payload }: ReturnType<typeof addProductAction>) {
  try {
    const products: ProductData[] = yield select((state: RootState) => state.homeReducer.home.data?.products);
    const basketData: BasketData = yield select((state: RootState) => state.basketReducer.basket.data);
    const newProduct = products.find((product) => product.id === payload);
    if (newProduct && basketData) {
      const setBasketDataAction = setBasketData({
        data: {
          ...basketData,
          products: basketData.products.length > 0 ? [...basketData.products, newProduct] : [newProduct],
        },
        state: DataState.Fulfilled,
      });
      yield put(setBasketDataAction);
    }
    yield call(postProduct, payload);
  } catch {
    // console.log('Something went wrong while delete product from basket');
  }
}

function* watchGetBasketData() {
  yield takeLatest(getBasketData.type, getBasketDataAsync);
  yield takeLatest(changeProductQuantityAction.type, changeProductQuantityActionAsync);
  yield takeLatest(removeProductAction.type, removeProductActionAsync);

  yield takeLatest(addProductAction.type, addProductActionAsync);
}

export function* basketSaga(): Generator {
  yield all([watchGetBasketData()]);
}
