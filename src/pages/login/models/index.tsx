import LoginServices from '../services/index';
import Cookies from 'js-cookie';

export default {
  namespace: 'login',
  state: {
    userName: '15082000855',
    password: '123',
  },
  reducer: {
    stateWillUpdate(state: object, action: Actions) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    * sign(action: Actions, helper: Helper) {
      const { call } = helper;
      const { payload: { userName, password } }: any = action;
      const { code, data: token } = yield call(LoginServices.login, userName, password);
      if (code === 200) {
        yield call(Cookies.set, 'token', token, { expires: 1 });
      }
    }
  }
}