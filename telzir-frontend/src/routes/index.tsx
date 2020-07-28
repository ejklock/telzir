import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default routes;
