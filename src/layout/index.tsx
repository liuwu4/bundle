import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './Layout.less';
import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';
class Index extends Component {
  render() {
    const { location }: any = this.props;
    const { pathname } = location;
    const path = pathname.match(/\/([a-zA-Z0-9])*/g);
    return (
      <div id="container">
        <Layout className="layout">
          <Layout.Sider className="sider">
            <Menu mode="inline"
              defaultOpenKeys={path[0]}
              selectedKeys={[pathname]}
            >
              <Menu.SubMenu title="管理员" key='/admin'>
                <Menu.Item key="/admin/info"><Link to="/admin/info">人员信息</Link></Menu.Item>
                <Menu.Item key="/admin/type"><Link to="/admin/type">类型</Link></Menu.Item>
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