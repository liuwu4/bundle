import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
const labelCol = {
  span: 7
}
const wrapperCol = {
  span: 14
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 7,
    },
  },
};
class LoginForm extends React.Component {
  handelSubmit() {
    const { history, form: { validateFields }, dispatch }: any = this.props;
    validateFields((error: object, value: object) => {
      if (!error) {
        dispatch({
          type: 'login/sign',
          payload: {
            ...value,
            callback: history.push('/admin')
          },
        });
      }
    });
  }

  render() {
    const { login, form: { getFieldDecorator } }: any = this.props;
    const { userName, password } = login;
    console.log(this.props);
    return (
      <div className="loginForm">
        <p>欢迎使用xx管理系统</p>
        <Form onSubmit={this.handelSubmit.bind(this)} labelAlign="right">
          <Form.Item label="用户名" labelCol={labelCol} wrapperCol={wrapperCol} >
            {
              getFieldDecorator('userName', {
                initialValue: userName,
                rules: [{ required: true, message: '请输入用户名' }],
              })(<Input placeholder="用户名" />)
            }
          </Form.Item>
          <Form.Item label="密码" labelCol={labelCol} wrapperCol={wrapperCol} >
            {
              getFieldDecorator('password', {
                initialValue: password,
                rules: [{ required: true, message: '请输入登录密码' }],
              })(<Input placeholder="密码" type="password" />)
            }
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              登录
          </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const stateToProps = (state: object) => {
  return { ...state }
}

export default connect(stateToProps)(Form.create({})(LoginForm));