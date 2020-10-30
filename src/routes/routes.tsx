import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { Container } from './styles';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/planos">
        <div>Planos</div>
      </Route>
    </Switch>
  );
};

export default Routes;
