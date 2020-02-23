import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './Layout.less';
import { Link } from 'react-router-dom';
class Index extends Component {
  render() {
    return (
      <div id="container">
        <Layout className="layout">
          <Layout.Sider className="sider">
            <Menu mode="inline">
              <Menu.SubMenu title="管理员">
                <Menu.Item><Link to="/admin">人员信息</Link></Menu.Item>
                <Menu.Item><Link to="/admin/type">类型</Link></Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Layout.Sider>
          <Layout className="context">
            <Layout.Header className="header">
              头部
            </Layout.Header>
            <Layout.Content className="content">
              {this.props.children}
            </Layout.Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default Index;