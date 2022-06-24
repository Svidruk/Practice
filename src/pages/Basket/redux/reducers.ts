import { DataState } from '@enums/DataState';
import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';

const initialState: State = {
  basket: { data: null, state: DataState.Pending },
  isBasketOpen: false,
};

export const slice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setIsBasketOpen(state) {
      state.isBasketOpen = !state.isBasketOpen;
    },
    setBasketData(state, action) {
      state.basket = action.payload;
    },
    setBasketDataLoading(state) {
      state.basket = { data: null, state: DataState.Pending };
    },
  },
});

export default slice.reducer;
