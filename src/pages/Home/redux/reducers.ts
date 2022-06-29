import { DataState } from '@enums/DataState';
import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';
import { addProductAction, changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';
import { ProductData } from '@interfaces/ProductData';
import { SortInfoData } from '@interfaces/SortInfoData';

const initialState: State = {
  home: { data: null, state: DataState.Pending },
  baseProducts: null,
  sortInfo: { searchByText: '', category: '' },
};

const getSortedData = (products: ProductData[], sortInfo: SortInfoData) => {
  if (sortInfo.category) products = products.filter((product) => product.categoryName === sortInfo.category);
  if (sortInfo.searchByText)
    products = products.filter((product) =>
      product.name.toLocaleLowerCase().startsWith(sortInfo.searchByText.toLocaleLowerCase())
    );
  return products;
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData(state, action) {
      state.home = action.payload;
      state.baseProducts = action.payload.data.products;
    },
    setHomeDataLoading(state) {
      state.home = { data: null, state: DataState.Pending };
    },

    setSortInfo(state, action) {
      if (!state?.baseProducts || !state.home.data) {
        return;
      }
      state.sortInfo = action.payload;
      state.home = {
        data: {
          ...state.home.data,
          products: getSortedData(state.baseProducts, state.sortInfo),
        },
        state: DataState.Fulfilled,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeProductQuantityAction, (state, { payload }) => {
      if (!state.home.data) {
        return;
      }
      state.home.data?.products;
      state.home = {
        data: {
          ...state.home.data,
          products: state.home.data.products.map((product) => {
            if (product.id === payload.productId)
              payload.sign === '+'
                ? (product.quantity = product.quantity + 1)
                : (product.quantity = product.quantity - 1);
            return product;
          }),
        },
        state: DataState.Fulfilled,
      };
    });

    builder.addCase(removeProductAction, (state, { payload }) => {
      if (!state.home.data) {
        return;
      }
      state.home.data?.products;
      state.home = {
        data: {
          ...state.home.data,
          products: state.home.data.products.map((product) => {
            if (product.id === payload) product.quantity = 0;
            return product;
          }),
        },
        state: DataState.Fulfilled,
      };
    });

    builder.addCase(addProductAction, (state, { payload }) => {
      if (!state.home.data) {
        return;
      }
      state.home.data?.products;
      state.home = {
        data: {
          ...state.home.data,
          products: state.home.data.products.map((product) => {
            if (product.id === payload) product.quantity = 1;
            return product;
          }),
        },
        state: DataState.Fulfilled,
      };
    });
  },
});

export default slice.reducer;
