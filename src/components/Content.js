import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from 'containers/Home/Home';
import About from 'containers/About/About';

const Content = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
);

export default Content;