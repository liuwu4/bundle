import React from 'react';
import Cookies from 'js-cookie';
import LoginForm from './components/LoginForm';
import './assets/LoginStyle.less';

const Login = (props: any) => {
  const { history } = props;
  const token = Cookies.get('token');
  console.log('token', token);
  if (token) {
    history.push('/admin');
    return null;
  }
  return (
    <div className="login">
      <LoginForm {...props} />
    </div>
  )
}

export default Login;
