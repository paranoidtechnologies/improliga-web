import App from './app/app.react';
import Home from './home/index.react';
import NotFound from './components/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />
    <NotFoundRoute handler={NotFound} name="not-found" />
    <Route handler={NotFound} name="kontakty" />
    <Route handler={NotFound} name="o-improlize" />
    <Route handler={NotFound} name="predstaveni" />
    <Route handler={NotFound} name="tymy" />
    <Route handler={NotFound} name="workshopy" />
  </Route>
);
