import About from './pages/about.react';
import App from './app/app.react';
import Contact from './pages/contact.react';
import Home from './pages/home.react';
import NotFound from './components/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />

    <Route handler={About} name="about" path="/o-improlize" ignoreScrollBehavior />
    <Route handler={Contact} name="contact" path="/kontakty" ignoreScrollBehavior />
    <Route handler={Home} name="shows" path="/predstaveni" ignoreScrollBehavior>
      <Route handler={NotFound} name="show" path="/predstaveni/:showId" />
    </Route>

    <Route handler={Home} name="teams" path="/tymy" ignoreScrollBehavior />
    <Route handler={Home} name="workshops" path="/workshopy" ignoreScrollBehavior />
    <Route handler={Home} name="news" path="/novinky" ignoreScrollBehavior />

    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
