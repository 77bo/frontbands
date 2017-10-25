import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import anime from 'animejs';

import Home from 'containers/Home/Home';
import News from 'containers/News/News';
import Tour from 'containers/Tour/Tour';
import Band from 'containers/Band/Band';
import Music from 'containers/Music/Music';
import Video from 'containers/Video/Video';
import Contact from 'containers/Contact/Contact';

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
            <Route path='/news' component={News}/>
            <Route path='/tour' component={Tour}/>
            <Route path='/band' component={Band}/>
            <Route path='/music' component={Music}/>
            <Route path='/video' component={Video}/>
            <Route path='/contact' component={Contact}/>
            <Route component={Errors.NotFound}/>
          </Switch>
        </main>
      </PageFade>
    </TransitionGroup>
  );
};

export default Router;