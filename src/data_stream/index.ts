const data = {
  userName: '15082000855',
  password: '123',
  types: []
}
interface Action {
  type: string,
  payload: object,
}

function loginStateWill(state = data, action: Action) {
  switch (action.type) {
    case 'sign':
      const obj = { ...state, ...action.payload };
      return obj;
    default:
      return state;
  }
}
export default loginStateWill;