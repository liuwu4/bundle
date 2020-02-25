const login = {
  userName: '15082000855',
  password: '123',
}
interface Action {
  type: string,
  payload: object,
}

function loginStateWill(state = login, action: Action) {
  switch (action.type) {
    case 'sign':
      const obj = { ...state, ...action.payload };
      return obj;
    default:
      return state;
  }
}
export default loginStateWill;