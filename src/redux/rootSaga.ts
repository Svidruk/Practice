import { all, call, spawn } from 'redux-saga/effects';
import { userSaga } from './user/sagas';
import { basketSaga } from '@pages/Basket/redux/sagas';
import { homeSaga } from '@pages/Home/redux/sagas';
import { productdescriptionSaga } from '@pages/ProductDescription/redux/sagas';

export function* rootSaga(): Generator {
  const sagas = [userSaga, basketSaga, homeSaga, productdescriptionSaga];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            if (e instanceof Error) {
              // eslint-disable-next-line no-console
              console.log('saga', e.message);
            }
          }
        }
      })
    )
  );
}
