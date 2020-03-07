const state = {
  userName: '15082000855',
  password: '123',
}
function loginReducer(init = state, action: Action) {
  switch (action.type) {
    case 'sign':
      const obj = { ...init, ...action.payload };
      return obj;
    default:
      return init;
  }
}
export default loginReducer;