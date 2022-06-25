import { DataState } from '@enums/DataState';
import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';
import { changeProductQuantityAction, removeProductAction } from '@pages/Basket/redux/actions';

const initialState: State = {
  home: { data: null, state: DataState.Pending },
};

export const slice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeData(state, action) {
      state.home = action.payload;
    },
    setHomeDataLoading(state) {
      state.home = { data: null, state: DataState.Pending };
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
