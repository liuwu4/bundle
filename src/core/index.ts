import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { call, select, put, all, takeEvery } from 'redux-saga/effects';

import LoginReducer from '@src/pages/login/models/LoginReducer';
import AdminReducer from '@src/pages/admin/models/AdminReducer';
import ProductReducer from '@src/pages/product/models/ProductReducer';

import Admin from '@src/pages/admin/models';
import Product from '@src/pages/product/models';
import Login from '@src/pages/login/models';

import LoginModel from '@src/pages/login/models/IndexModel';
import AdminModel from '@src/pages/admin/models/IndexModel';
import ProductModel from '@src/pages/product/models/IndexModel';
import TestModel from '@src/pages/test/models/TestModel';


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
function nameReducer(namespace: string, reducer: object) {
  const keys = Object.keys(reducer);
  const handles = {};
  keys.forEach(item => {
    Object.assign(handles, { [`${namespace}/${item}`]: reducer[item] });
  });
  return handles;
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
function models(model: Model) {
  const stateManager = {
    login: LoginReducer,
    adminReducer: AdminReducer,
    productReducer: ProductReducer,
  };
  const { namespace, state, reducer, effects } = model;
  Object.assign(stateManager, { [namespace]: willUpdate(state, namespace, reducer) });
  const sagas = handleEffects(namespace, effects);
  return { stateManager, sagas };
}


const { stateManager, sagas } = models(TestModel);
const RootReducer = combineReducers(stateManager);
const createSaga = createSagaMiddleware();
const Store = createStore(RootReducer, applyMiddleware(createSaga));

const Root = {
  store: Store,
  run: runSaga,
}
function* testInit(sagas: Array<any>, helper: Helper) {
  yield all(sagas.map(item => {
    return takeEvery(item.key, function* (actions: Actions) {
      yield item.effect(actions, { ...helper, put: item.put });
    });
  }))
}
function runSaga() {
  const helper = { call, put, select };
  createSaga.run(testInit, sagas, helper);
  createSaga.run(Login);
  createSaga.run(Admin);
  createSaga.run(Product);
}


export default Root;