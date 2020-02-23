import React from 'react';
import Cookies from 'js-cookie'
import { connect } from 'react-redux';
import { Route } from 'react-router';
import { HashRouter, Switch } from 'react-router-dom';
import Layout from '@src/layout/index';
import Admin from '@src/pages/admin/index';
import Type from '@src/pages/admin/type/Type';
import Login from './pages/login/index';

const RouterConfig = (props: object) => {

  return (
    <HashRouter>
      <Switch>


        <Route path="/" component={Cookies.get("token") ?
          () => {
            return (
              <Layout>
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/type" component={Type} />
              </Layout>)
          }
          : Login} />
      </Switch>
    </HashRouter>
  )
}
const mapStateToProps = (state: object) => {
  return { ...state };
}
export default connect(mapStateToProps)(RouterConfig);



