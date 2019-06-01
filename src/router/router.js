import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'components';
import { Details, Home } from 'containers';

const Router = () => (
  <React.Fragment>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/details" component={Details} />
    </Layout>
  </React.Fragment>
);

export default Router;
