import React, { Component } from 'react';
import { Layout } from 'antd';
import './Layout.less';
class Index extends Component {
  render() {
    return (
      <div id="container">
        <Layout className="layoutHeader">
          <Layout.Header>
            头部
          </Layout.Header>
        </Layout>
        <Layout>
          <Layout.Sider className="layoutSider">
            侧边栏
            </Layout.Sider>
          <Layout.Content className="layoutContent">
            内容区域
            </Layout.Content>
        </Layout>
      </div>
    )
  }
}
export default Index;