import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import anime from 'animejs';

import Home from 'containers/Home/Home';
import About from 'containers/About/About';

import Errors from 'components/Errors/Errors';

import 'styles/fade.css';

const PageFade = (props) => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={500}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

const Router = (props) => {
  const locationKey = props.location.pathname;
  return (
    <TransitionGroup>
      <PageFade key={locationKey}>
        <main className="container">
          <Switch location={props.location}>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route component={Errors.NotFound}/>
          </Switch>
        </main>
      </PageFade>
    </TransitionGroup>
  );
};

export default Router;