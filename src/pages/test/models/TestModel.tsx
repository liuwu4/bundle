export default {
  namespace: 'test',
  state: {
    test: '有点小内容',
  },
  reducer: {
    stateWillUpdate(state: object, actions: Actions) {
      console.log('stateWillUpdate');
      return { ...state, ...actions.payload };
    }
  },
  effects: {
    * test(actions: Actions, helper: Helper) {
      const { payload } = actions;
      const { put } = helper;
      console.log('effectss');
      yield put({
        type: 'stateWillUpdate',
        payload: {
          add: 'stateWillUpdate',
        }
      })
    },
    * test1(actions: Actions, helper: Helper) {
      const { payload } = actions;
      const { put } = helper;
      console.log('effects1');
    }
  },
}