import About from './pages/about.react';
import App from './app/app.react';
import Contact from './pages/contact.react';
import Home from './pages/home.react';
import News from './pages/news.react';
import Event from './pages/event.react';
import Shows from './pages/shows.react';
import NotFound from './components/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />

    <Route handler={About} name="about" path="/o-improlize" />
    <Route handler={Contact} name="contact" path="/kontakty" />
    <Route handler={Shows} name="shows" path="/predstaveni" />
    <Route handler={Event} name="show" path="/predstaveni/:showId" />

    <Route handler={Home} name="teams" path="/tymy" />
    <Route handler={Home} name="workshops" path="/workshopy" />
    <Route handler={News} name="news" path="/novinky" />

    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
