import { call, put, takeEvery } from 'redux-saga/effects';
import { message } from 'antd';
import ProductService from '../services';

function* products(action: object) {
  const { code, data } = yield call(ProductService.products);
  if (code === 200) {
    yield put({
      type: 'productWillUpdate',
      payload: {
        products: data
      }
    });
  }
}
function* addProduct(action: any) {
  const { payload } = action;
  yield put({
    type: 'productWillUpdate',
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
      type: 'productWillUpdate',
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
function* productEntry() {
  yield takeEvery('products', products);
  yield takeEvery('addProduct', addProduct);
  yield takeEvery('addList', addList);
  yield takeEvery('deleteProduct', deleteProduct);
}
export default productEntry;