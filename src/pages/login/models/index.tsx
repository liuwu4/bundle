import Cookies from 'js-cookie';
import { takeEvery, call } from 'redux-saga/effects';
import LoginServices from '../services/index';
function* sign(action: any) {
  const { payload: { userName, password } } = action;
  const { code, data: token } = yield call(LoginServices.login, userName, password);
  if (code === 200) {
    Cookies.set('token', token, { expires: 1 });
  }
}

function* loginEntry() {
  yield takeEvery('login', sign);
}
export default loginEntry;

