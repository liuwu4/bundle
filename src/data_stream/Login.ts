import Cookies from 'js-cookie';
import { takeEvery, call, put } from 'redux-saga/effects';
import LoginServer from '@src/pages/login/services/index';
import AdminService from '@src/pages/admin/services/Admin';
import { message } from 'antd';

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

function* type() {
  const { data } = yield call(AdminService.types);
  yield put({
    type: 'sign',
    payload: {
      types: data.map((item: any) => ({ ...item, flag: false })),
    }
  });
}
function* deleteType(action: object) {
  const { payload }: any = action;
  const { typeId } = payload;
  const { code } = yield call(AdminService.deleteType, typeId);
  if (code === 200) {
    message.success({ content: '删除成功' });
    yield put({
      type: 'types',
    });
  }
}
function* postType(action: object) {
  const { payload }: any = action;
  const { type } = payload;
  const { code } = yield call(AdminService.postType, type);
  if (code === 200) {
    message.success({ content: '新增类型成功' });
    yield put({
      type: 'types'
    })
  }
}
function* putType(action: object) {
  const { payload }: any = action;
  const { type, typeId } = payload;
  const { code } = yield call(AdminService.putType, typeId, type);
  if (code === 200) {
    message.success({ content: '修改成功' });
    yield put({
      type: 'types'
    })
  }
}
function* init() {
  yield takeEvery('login', login);
  yield takeEvery('types', type);
  yield takeEvery('delete', deleteType);
  yield takeEvery('addType', postType);
  yield takeEvery('updateType', putType);
}

export default init;