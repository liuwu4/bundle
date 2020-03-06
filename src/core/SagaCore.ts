import Cookies from 'js-cookie';
import { message } from 'antd';
import { takeEvery, call, put } from 'redux-saga/effects';
import LoginServer from '@src/pages/login/services/index';
import AdminService from '@src/pages/admin/services/Admin';
import ProductService from '@src/pages/product/services';

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
    });
  }
}
function* products(action: object) {
  const { code, data } = yield call(ProductService.products);
  if (code === 200) {
    yield put({
      type: 'sign',
      payload: {
        products: data
      }
    });
  }
}
function* addProduct(action: any) {
  const { payload } = action;
  yield put({
    type: 'sign',
    payload: {
      ...payload,
    }
  });
}
function* addList(action: any) {
  const { payload } = action;
  const { code } = yield call(ProductService.addProduct, payload.value);
  if (code === 200) {
    message.success({ content: '新增成功' });
    yield put({ type: 'products' });
    yield put({
      type: 'sign',
      payload: {
        addModel: false,
      }
    })
  }
}
function* deleteProduct(action: any) {
  const { payload } = action;
  const { code } = yield call(ProductService.deleteProduct, payload.no);
  if (code === 200) {
    message.success({ content: '删除成功' });
    yield put({
      type: 'products',
    })
  }
}
function* init() {
  message.destroy();
  yield takeEvery('login', login);
  yield takeEvery('types', type);
  yield takeEvery('delete', deleteType);
  yield takeEvery('addType', postType);
  yield takeEvery('updateType', putType);
  yield takeEvery('products', products);
  yield takeEvery('addProduct', addProduct);
  yield takeEvery('addList', addList);
  yield takeEvery('deleteProduct', deleteProduct);
}

export default init;