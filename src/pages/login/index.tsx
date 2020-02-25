import React, { PureComponent } from 'react';
import Cookies from 'js-cookie';
import LoginForm from './components/LoginForm';
import './assets/LoginStyle.less';
import { withRouter } from 'react-router-dom';
class Login extends PureComponent {
  render() {
    const token = Cookies.get('token');
    if (token) {
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