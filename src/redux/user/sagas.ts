import { all, call, put, takeLatest } from 'redux-saga/effects';
import { UserData } from '@interfaces/UserData';
import { DataState } from '@enums/DataState';
import { getCurrentUser, loginUser, registerUser, setCurrentUser } from './actions';
import { fetchCurrentUser, loginUserHttp, registrationUser } from '@api/userApi';
import { displayNotification } from '@redux/notifications/actions';
import { getErrorInfo } from '@helpers/getErrorInfo';
import axios from 'axios';

function* getCurrentUserAsync() {
  try {
    const response: UserData = yield call(fetchCurrentUser);
    yield put(setCurrentUser({ data: response, state: DataState.Fulfilled }));
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
    const response: UserData = yield call(registrationUser, user);
    yield put(setCurrentUser({ data: response, state: DataState.Fulfilled }));
  } catch (error) {
    yield put(displayNotification(axios.isAxiosError(error) ? getErrorInfo(error).message : "Can't register user"));
  }
}

function* loginUserAsync({ payload: user }: ReturnType<typeof loginUser>) {
  try {
    const response: UserData = yield call(loginUserHttp, user);
    yield put(setCurrentUser({ data: response, state: DataState.Fulfilled }));
  } catch (error) {
    yield put(displayNotification(axios.isAxiosError(error) ? getErrorInfo(error).message : 'User not found'));
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
