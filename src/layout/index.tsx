import React, { Component } from 'react';
import { Layout } from 'antd';
import './Layout.less';
class Index extends Component {
  render() {
    return (
      <div id="container">
        <Layout className="layout">
          <Layout.Sider className="sider">
            侧边栏
          </Layout.Sider>
          <Layout className="context">
            <Layout.Header className="header">
              头部
            </Layout.Header>
            <Layout.Content className="content">
              内容区域
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Index;