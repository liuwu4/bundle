import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Layout from '@src/layout/index';
import Admin from '@src/pages/admin/index';
import Test from '@src/pages/test';
import Type from '@src/pages/admin/components/Type';
import Login from './pages/login/index';

const RouterMap = (props: object) => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Layout>
          <Route exact path="/admin/test" component={Test} />
          <Route exact path="/admin/info" component={Admin} />
          <Route exact path="/admin/type" component={Type} />
        </Layout>
      </Switch>
    </HashRouter>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default (connect(mapStateToProps)(RouterMap));



