import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './containers/App/App';
import registerServiceWorker from './services/registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

// Render our root component into the div with id "root"
ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={App}/>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
