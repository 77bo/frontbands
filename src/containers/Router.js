import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'containers/Home/Home';
import About from 'containers/About/About';

import Errors from 'components/Errors/Errors';

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/about' component={About}/>
    <Route component={Errors.NotFound}/>
  </Switch>
);

export default Router;