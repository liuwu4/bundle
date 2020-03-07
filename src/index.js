import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import '@src/utils/global.less';
import 'antd/dist/antd.css';
import Root from './core/index';
import RouterMap from './RoutetMap';
import Admin from '@src/pages/admin/models';
import Product from '@src/pages/product/models';
import Login from '@src/pages/login/models';
import Test from '@src/pages/test/Test';
Root.run(Login);
Root.run(Test);
Root.run(Admin);
Root.run(Product);
ReactDOM.render(
  <Provider store={Root.store}>
    <ConfigProvider locale={zhCN}>
      <RouterMap />
    </ConfigProvider>
  </Provider>, document.getElementById('app'));