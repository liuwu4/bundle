import React, { Component } from 'react';
import { Avatar, Row, Col, Form } from 'antd';
import './assets/Admin.less'
import { connect } from 'react-redux';
class Admin extends Component {
  state = {
    user: [],
  }
  async componentDidMount() {
    const { dispatch }: any = this.props;
    dispatch({
      type: 'admin/user',
    })

  }
  render() {
    const { admin }: any = this.props;
    const { user } = admin;
    return (
      <div className="admin">
        <div className="card"></div>

        {
          user.map((item: any, index: number) => (
            <div className="card" key={index}>
              <Form labelCol={{ span: 12 }} wrapperCol={{ span: 12 }}>
                <Form.Item label="用户昵称">{item.nickname}</Form.Item>
                <Form.Item label="手机号">{item.phone}</Form.Item>
                <Form.Item label="性别">{item.sex === 2 ? '保密' : item.sex === 1 ? '女' : '男'}</Form.Item>
                <Form.Item label="状态">{item.status === 1 ? '启用' : '禁用'}</Form.Item>
              </Form>
            </div>
          ))
        }

      </div>
    )
  }
}
const mapStateToProps = (state: object) => {
  return { ...state };
};

export default connect(mapStateToProps)(Admin);