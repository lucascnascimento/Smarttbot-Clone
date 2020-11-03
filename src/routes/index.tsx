import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Dashboard />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
