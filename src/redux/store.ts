import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import userReducer from './user/reducers';
import basketReducer from '../pages/Basket/redux/reducers';
import homeReducer from '../pages/Home/redux/reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userReducer,
    basketReducer,
    homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
