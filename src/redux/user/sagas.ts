import { all } from 'redux-saga/effects';

function* watchGetCurrentUser() {
  // yield takeLatest(registerUser.type, registerUserAsync);
  // yield takeLatest(loginUser.type, loginUserAsync);
}

export function* userSaga(): Generator {
  yield all([watchGetCurrentUser()]);
}
