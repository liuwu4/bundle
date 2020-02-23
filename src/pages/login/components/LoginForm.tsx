import React from 'react';
import { Form, Input, Button, Avatar } from 'antd';
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
    const { form: { validateFields } }: any = this.props;
    validateFields((error: object, value: object) => {
      if (!error) {
        console.log('Received values of form: ', value);
      }
    });
  }
  render() {
    const { form: { getFieldDecorator } }: any = this.props;
    return (
      <div className="loginForm">
        <p>欢迎使用xx管理系统</p>
        <Form onSubmit={this.handelSubmit.bind(this)} labelAlign="right">
          <Form.Item label="用户名" labelCol={labelCol} wrapperCol={wrapperCol} >
            {
              getFieldDecorator("userName", {
                rules: [{ required: true, message: '请输入用户名' }],
              })(<Input placeholder="用户名" />)
            }
          </Form.Item>
          <Form.Item label="密码" labelCol={labelCol} wrapperCol={wrapperCol} >
            {
              getFieldDecorator("password", {
                rules: [{ required: true, message: '请输入登录密码' }],
              })(<Input placeholder="密码" />)
            }
          </Form.Item>
          {/* <Form.Item label="验证码" labelCol={labelCol} wrapperCol={wrapperCol} >
            {
              getFieldDecorator("code", {
                rules: [{ required: true, message: '请输入验证码' }],
              })(<Input placeholder="验证码" />)

            }
          </Form.Item> */}
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

export default Form.create({})(LoginForm);;