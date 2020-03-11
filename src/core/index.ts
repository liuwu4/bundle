import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, select, put, all, takeEvery } from 'redux-saga/effects';

import TestModel from '@src/pages/test/models';
import LoginModel from '@src/pages/login/models';
import AdminModel from '@src/pages/admin/models';
import ProductModel from '@src/pages/product/models';

const stateManager = {};

const sagas = [
  ...models(TestModel),
  ...models(AdminModel),
  ...models(ProductModel),
  ...models(LoginModel)
];

function models(model: Model) {
  const { namespace, state, reducer, effects } = model;
  Object.assign(stateManager, { [namespace]: willUpdate(state, namespace, reducer) });
  const sagas = handleEffects(namespace, effects);
  return sagas;
}

function willUpdate(state: object, namespace: string, reducer: object) {
  const putName = nameReducer(namespace, reducer);
  return function (init = state, actions: Actions) {
    const { type } = actions;
    if (putName[type]) {
      return putName[type](init, actions);
    }
    return init;
  }
}

function nameReducer(namespace: string, reducer: object) {
  const keys = Object.keys(reducer);
  const handles = {};
  keys.forEach(item => {
    Object.assign(handles, { [`${namespace}/${item}`]: reducer[item] });
  });
  return handles;
}

function handleEffects(namespace: string, effects: object) {
  let sagas: Array<object> = [];
  const keys = Object.keys(effects);
  keys.forEach(item => {
    const key = `${namespace}/${item}`;
    const effect = effects[item];
    sagas.push({
      key,
      effect,
      put: _put
    });
  });
  function* _put(actions: Actions) {
    const { type } = actions;
    yield put({
      ...actions,
      type: `${namespace}/${type}`,
    });
  }
  return sagas;
}


const RootReducer = combineReducers(stateManager);
const createSaga = createSagaMiddleware();
const Store = createStore(RootReducer, applyMiddleware(createSaga));

const Root = {
  store: Store,
  run: runSaga,
}
function* init(sagas: Array<any>, helper: Helper) {
  yield all(sagas.map(item => {
    return takeEvery(item.key, function* (actions: Actions) {
      yield item.effect(actions, { ...helper, put: item.put });
    });
  }))
}
function runSaga() {
  const helper = { call, put, select };
  createSaga.run(init, sagas, helper);
}


export default Root;