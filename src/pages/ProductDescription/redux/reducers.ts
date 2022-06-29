import { DataState } from '@enums/DataState';
import { createSlice } from '@reduxjs/toolkit';
import { State } from './types';

const initialState: State = {
  productDescription: { data: null, state: DataState.Pending },
};

export const slice = createSlice({
  name: 'productDescription',
  initialState,
  reducers: {
    setProductDescriptionData(state, action) {
      state.productDescription = action.payload;
    },
    setProductDescriptionDataLoading(state) {
      state.productDescription = { data: null, state: DataState.Pending };
    },
  },
});

export default slice.reducer;
