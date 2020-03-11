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
    *login(action: Actions, helper: Helper) {
      console.log('login--helper:', action);
      console.log('login--helper:', helper);

    }
  }
}