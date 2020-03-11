
const state = {
  types: [],
  user: [],
};
function adminReducer(init = state, action: Actions) {
  const { type, payload } = action;
  if (type === 'adminWillUpdate') {
    return { ...init, ...payload };
  } else {
    return init;
  }
}
export default adminReducer;