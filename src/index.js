import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './containers/App/App';
import registerServiceWorker from './services/registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
