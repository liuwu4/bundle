import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import AdminService from '../services';
function* user() {
  const { code, data } = yield call(AdminService.users);
  if (code === 200) {
    yield put({
      type: 'adminWillUpdate',
      payload: {
        user: data,
      }
    })
  }
}
function* type() {
  const { data } = yield call(AdminService.types);
  yield put({
    type: 'adminWillUpdate',
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
    });
  }
}
function* adminEntry() {
  yield takeEvery("users", user);
  yield takeEvery('types', type);
  yield takeEvery('delete', deleteType);
  yield takeEvery('addType', postType);
  yield takeEvery('updateType', putType);
}
export default adminEntry;