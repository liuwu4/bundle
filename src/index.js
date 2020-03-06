import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import '@src/utils/global.less';
import 'antd/dist/antd.css';
import RouterMap from './RoutetMap';
import SagaCore from '@src/core/SagaCore';
import RootReducer from '@src/core/index';
const createSaga = createSagaMiddleware(SagaCore);
const store = createStore(RootReducer, applyMiddleware(createSaga));
createSaga.run(SagaCore);
ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <RouterMap />
    </ConfigProvider>
  </Provider>, document.getElementById('app'));