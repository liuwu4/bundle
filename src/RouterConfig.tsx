import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Login from './pages/login/index';

const RouterConfig = (props: object) => {
  return (
    <HashRouter>
      <Route path="/" component={Login} />
    </HashRouter>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default connect(mapStateToProps)(RouterConfig);



