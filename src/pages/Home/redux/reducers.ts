import { DataState } from '@enums/DataState';
import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';
import { changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';
import { ProductData } from '@interfaces/ProductData';
import { SortInfoData } from '@interfaces/SortInfoData';

const initialState: State = {
  home: { data: null, state: DataState.Pending },
  baseHome: null,
  sortInfo: { searchByText: '', category: '' },
};

const getSortedData = (products: ProductData[], sortInfo: SortInfoData) => {
  if (sortInfo.category) products = products.filter((product) => product.category === sortInfo.category);
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
      state.baseHome = action.payload.data;
    },
    setHomeDataLoading(state) {
      state.home = { data: null, state: DataState.Pending };
    },
    setSortInfo(state, action) {
      if (!state?.baseHome?.products || !state.home.data) {
        return;
      }
      state.sortInfo = action.payload;
      state.home = {
        data: {
          ...state.home.data,
          products: getSortedData(state.baseHome.products, state.sortInfo),
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
            if (product.id === payload.id) product.quantity = payload.quantity;
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
  },
});

export default slice.reducer;
