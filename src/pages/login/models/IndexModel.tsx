export default {
  namespace: 'login',
  state: {
    userName: '',
    password: '',
  },
  reducer: {
    stateWillUpdate(state: object, action: Actions) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *login(action: any, helper: Helper) {
      console.log('login--helper:', action);
      console.log('login--helper:', helper);

    }
  }
}