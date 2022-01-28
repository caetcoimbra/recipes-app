import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Explore from '../Pages/Explore';
import Login from '../Pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Pagina Login */}
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" />
        <Route exact path="explore" component={ Explore } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
