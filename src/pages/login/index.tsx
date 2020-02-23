import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import './assets/LoginStyle.less';
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <LoginForm />
      </div>
    )
  }
}