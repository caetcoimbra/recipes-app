import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Pagina Login */}
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
