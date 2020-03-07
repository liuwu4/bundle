import Cookies from 'js-cookie';
import { takeEvery, call } from 'redux-saga/effects';
function* test() {
  console.log('测试');
  Cookies.remove('token');
  yield call(Cookies.remove, 'token');
}
function* testInit() {
  yield takeEvery("test", test);
}
export default testInit;