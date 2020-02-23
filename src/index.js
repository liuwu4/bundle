import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './RouterConfig';
import '@src/utils/global.less';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import { createStore, combineReducers } from 'redux';
import loginStateWill from '@src/data_stream/index';
const store = createStore(combineReducers({ loginStateWill }));

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>, document.getElementById('app'));