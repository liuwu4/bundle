import AdminService from '../services';
import { message } from 'antd';


export default {
  namespace: 'admin',
  state: {
    types: [],
    user: [],
  },
  reducer: {
    stateWillUpdate(state: object, action: Actions) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    * user(_actions: Actions, helper: Helper) {
      const { call, put } = helper;
      const { code, data } = yield call(AdminService.users);
      if (code === 200) {
        yield put({
          type: 'stateWillUpdate',
          payload: {
            user: data,
          }
        })
      }
    },
    * type(_actions: Actions, helper: Helper) {
      const { call, put } = helper;
      const { data } = yield call(AdminService.types);
      yield put({
        type: 'stateWillUpdate',
        payload: {
          types: data.map((item: any) => ({ ...item, flag: false })),
        }
      });
    },
    * deleteType(action: Actions, helper: Helper) {
      const { call, put } = helper;
      const { payload } = action;
      const { typeId } = payload;
      const { code } = yield call(AdminService.deleteType, typeId);
      if (code === 200) {
        message.success({ content: '删除成功' });
        yield put({
          type: 'type',
        });
      }
    },
    * postType(action: Actions, helper: Helper) {
      const { call, put } = helper;
      const { payload } = action;
      const { type } = payload;
      const { code } = yield call(AdminService.postType, type);
      if (code === 200) {
        message.success({ content: '新增类型成功' });
        yield put({
          type: 'type'
        })
      }
    },
    * putType(action: Actions, helper: Helper) {
      const { call, put } = helper;
      const { payload } = action;
      const { type, typeId } = payload;
      const { code } = yield call(AdminService.putType, typeId, type);
      if (code === 200) {
        message.success({ content: '修改成功' });
        yield put({
          type: 'type'
        });
      }
    },
  }
}