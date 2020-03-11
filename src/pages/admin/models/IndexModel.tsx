export default {
  namespace: 'admin',
  state: {
    types: [],
    user: [],
  },
  reducer: {
    stateWillUpdate(state: object, action: Action) {
      return { ...state, ...action.payload };
    }
  },
  effects: {
    *login(action: any, helper: any) {
      console.log('login--helper:', action);
      console.log('login--helper:', helper);
    }
  }
}