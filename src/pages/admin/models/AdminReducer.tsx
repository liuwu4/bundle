
const state = {};
function adminReducer(init = state, action: Action) {
  const { type, payload } = action;
  if (type === 'adminWillUpdate') {
    return { ...init, ...payload };
  } else {
    return init;
  }
}
export default adminReducer;