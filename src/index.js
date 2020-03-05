import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import '@src/utils/global.less';
import'antd/dist/antd.less';
import RouterMap from './RoutetMap';
import loginStateWill from '@src/data_stream/index';
import LoginSaga from '@src/data_stream/Login';

const createSaga = createSagaMiddleware(LoginSaga);
const store = createStore(combineReducers({ loginStateWill }), applyMiddleware(createSaga));
createSaga.run(LoginSaga);
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterMap />
    </ConfigProvider>
  </Provider>, document.getElementById('app'));