import Cookies from 'js-cookie';
import { takeEvery, call, put } from 'redux-saga/effects';
import LoginServer from '@src/pages/login/services/index';

function* login(action: object) {
  const { payload, callback }: any = action;
  const { userName, password } = payload;
  const result = yield call(LoginServer.login, userName, password);
  const { data, code } = result;
  if (code === 200) {
    Cookies.set('token', data, { expires: 1 });
    yield put({
      type: 'sign',
      payload: {
        token: data,
      }
    });
    yield call(callback);
  }
}
function* init() {
  yield takeEvery('login', login);
}

export default init;