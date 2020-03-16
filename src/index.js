import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css'
import '@src/utils/global.less';
import Root from './core/index';
import RouterMap from './RoutetMap';
Root.run();
ReactDOM.render(
  <Provider store={Root.store}>
    <ConfigProvider locale={zhCN}>
      <RouterMap />
    </ConfigProvider>
  </Provider>, document.getElementById('app'));