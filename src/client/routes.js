import App from './app/app.react';
import Home from './home/index.react';
import NotFound from './components/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />

    <Route handler={Home} name="about" path="/o-improlize" />
    <Route handler={Home} name="shows" path="/predstaveni">
      <Route handler={NotFound} name="show" path="/predstaveni/:showId" />
    </Route>

    <Route handler={Home} name="teams" path="/tymy" />
    <Route handler={Home} name="workshops" path="/workshopy" />
    <Route handler={Home} name="news" path="/novinky" />
    <Route handler={Home} name="contact" path="/kontakty" />

    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
