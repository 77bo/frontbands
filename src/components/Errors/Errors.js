import React from 'react';

const NotFound = ({location}) => (
  <div>
    <h3>Not found anything for <code>{location.pathname}</code></h3>
  </div>
);

const Forbidden = ({location}) => (
  <div>
    <h3>This resource is Forbidden</h3>
  </div>
);

const Unauthorized = ({location}) => (
  <div>
    <h3>You are unauthorized for this action!</h3>
  </div>
);

export default {NotFound, Forbidden, Unauthorized};