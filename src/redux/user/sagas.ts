import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserData } from '@interfaces/UserData';
import { DataState } from '@enums/DataState';
import { getCurrentUser, loginUser, registerUser, setCurrentUser } from './actions';
import { fetchCurrentUser, loginUserHttp, registrationUser } from '@api/userApi';

function* getCurrentUserAsync() {
  try {
    const response: { data: UserData } = yield call(fetchCurrentUser);
    yield put(setCurrentUser({ data: response.data, state: DataState.Fulfilled }));
  } catch (error) {
    yield put(
      setCurrentUser({
        data: null,
        state: DataState.Rejected,
      })
    );
  }
}

function* registerUserAsync({ payload: user }: ReturnType<typeof registerUser>) {
  try {
    yield put(
      setCurrentUser({
        data: { fullName: user.firstName + ' ' + user.lastName, email: user.email },
        state: DataState.Fulfilled,
      })
    );

    const response: UserData = yield call(registrationUser, user);
    yield put(setCurrentUser({ data: response, state: DataState.Fulfilled }));
  } catch (error) {
    // console.log('error register');
  }
}

function* loginUserAsync({ payload: user }: ReturnType<typeof loginUser>) {
  try {
    yield put(
      setCurrentUser({
        data: { fullName: 'man', email: user.email },
        state: DataState.Fulfilled,
      })
    );
    const response: UserData = yield call(loginUserHttp, user);
    yield put(setCurrentUser({ data: response, state: DataState.Fulfilled }));
  } catch (error) {
    // console.log('error login');
  }
}

function* watchGetCurrentUser() {
  yield takeLatest(getCurrentUser.type, getCurrentUserAsync);
  yield takeLatest(registerUser.type, registerUserAsync);
  yield takeLatest(loginUser.type, loginUserAsync);
}

export function* userSaga(): Generator {
  yield all([watchGetCurrentUser()]);
}
