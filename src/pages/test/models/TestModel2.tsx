export default {
  namespace: 'test2',
  state: {
    test: '',
  },
  effects: {
    * test(actions: Actions, helper: Helper) {
      console.log('测试', actions, helper);
    }
  },
}