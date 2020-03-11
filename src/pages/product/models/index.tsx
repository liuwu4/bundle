import ProductService from '../services';
import { message } from 'antd';

export default {
  namespace: 'product',
  state: {
    products: [],
    addModel: false,
  },
  reducer: {
    stateWillUpdate(state: object, actions: Actions) {
      return { ...state, ...actions.payload };
    }
  },
  effects: {
    * products(action: Actions, helper: Helper) {
      const { call, put } = helper;
      const { code, data } = yield call(ProductService.products);
      if (code === 200) {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            products: data
          }
        });
      }
    }
    , * addProduct(action: Actions, helper: Helper) {
      const { put } = helper;
      const { payload } = action;
      yield put({
        type: 'stateWillUpdate',
        payload: {
          ...payload,
        }
      });
    }
    , * addList(action: Actions, helper: Helper) {
      const { payload }: any = action;
      const { call, put } = helper;
      const { code } = yield call(ProductService.addProduct, payload.value);
      if (code === 200) {
        message.success({ content: '新增成功' });
        yield put({ type: 'products' });
        yield put({
          type: 'stateWillUpdate',
          payload: {
            addModel: false,
          }
        })
      }
    }
    , * deleteProduct(action: Actions, helper: Helper) {
      const { payload }: any = action;
      const { call, put } = helper;
      const { code } = yield call(ProductService.deleteProduct, payload.no);
      if (code === 200) {
        message.success({ content: '删除成功' });
        yield put({
          type: 'products',
        })
      }
    }
  }
}