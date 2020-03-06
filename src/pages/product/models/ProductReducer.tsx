const state = {};

function ProductReducer(init = state, action: Action) {
  const { type, payload } = action;
  if (type === 'productWillUpdate') {
    return { ...init, ...payload };
  } else {
    return init;
  }
}

export default ProductReducer;