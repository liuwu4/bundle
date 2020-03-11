import React, { Component } from 'react';
import Cookies from 'js-cookie';
import LoginForm from './components/LoginForm';
import './assets/LoginStyle.less';
import { withRouter } from 'react-router-dom';
class Login extends Component {
  render() {
    const token = Cookies.get('token');
    if (token) {
      console.log('登录');
      this.props.history.push('/admin');
      return null;
    }
    return (
      <div className="login">
        <LoginForm />
      </div>
    )
  }
}

export default withRouter(Login);