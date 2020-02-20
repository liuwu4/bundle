import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import '@src/utils/global.less';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import loginStateWill from '@src/data_stream/index';
const store = createStore(combineReducers({ loginStateWill }));

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById('app'));