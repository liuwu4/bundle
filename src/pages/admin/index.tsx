import React, { Component } from 'react';
import { Avatar, Row, Col } from 'antd';
import AdminServer from './services/Admin';
import './assets/Admin.less'
export default class Admin extends Component {
  state = {
    user: [],
  }
  async componentDidMount() {
    const result = await AdminServer.users();
    const { data } = result;
    this.setState({
      user: data
    })
  }
  render() {
    const { user } = this.state;
    return (
      <div className="admin">
        {
          user.map((item: any, index) => (
            <div className="card" key={index}>
              <div style={{ textAlign: 'center' }} >
                <Avatar icon="user" />
              </div>
              <div className="list">
                <span>用户昵称：</span>{item.nickname}
              </div>
              <div className="list" >
                <span>手机号：</span>   {item.phone}
              </div>
              <div className="list">
                <span>性别：</span> {item.sex === 2 ? '保密' : item.sex === 1 ? '女' : '男'}
              </div>
              <div className="list">
                <span>状态：</span> {item.status === 1 ? '启用' : '禁用'}
              </div>
              <Row style={{ textAlign: 'center', marginTop: 5 }}>
                <Col span={8}>
                  <a type="primary">启用</a>
                </Col>
                <Col span={8}>
                  <a type="danger" style={{ color: '' }}>禁用</a>
                </Col>
                <Col span={8}>
                  <a type="danger" style={{ color: '#f24' }}>删除</a>
                </Col>
              </Row>
            </div>
          ))
        }
      </div>
    )
  }
}