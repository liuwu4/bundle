import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './RouterConfig';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import loginStateWill from '@src/data_stream/index';
import 'antd/dist/antd.css';
import '@src/utils/global.less';
import LoginSaga from '@src/data_stream/Login';

const createSaga = createSagaMiddleware(LoginSaga);
const store = createStore(combineReducers({ loginStateWill }), applyMiddleware(createSaga));
createSaga.run(LoginSaga);
ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>, document.getElementById('app'));