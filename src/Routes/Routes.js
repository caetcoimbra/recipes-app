import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Bebidas from '../Pages/Bebidas';
import Profile from '../Pages/Profile';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/drinks" component={ Bebidas } />
        <Route exact path="/profile" component={ Profile } />
      </Switch>
    );
  }
}

export default Routes;
