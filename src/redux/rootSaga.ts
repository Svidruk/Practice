import { all, call, spawn } from 'redux-saga/effects';
import { userSaga } from './user/sagas';

export function* rootSaga(): Generator {
  const sagas = [userSaga];

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
