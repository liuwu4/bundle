const login = {
  loginInfo: {
    user: "字符串"
  },
  name: ''
}
interface Action {
  type: string,
  payload: object,
}

function loginStateWill(state = login, action: Action) {
  switch (action.type) {
    case 'login':
      const obj = { ...state, ...action.payload };
      return obj;
    default:
      return state;
  }
}
export default loginStateWill;