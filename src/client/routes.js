import About from './pages/about.react';
import App from './app/app.react';
import Contact from './pages/contact.react';
import Home from './pages/home.react';
import News from './pages/news.react';
import NewsDetail from './pages/news/detail.react';
import Event from './pages/event.react';
import Shows from './pages/shows.react';
import TeamsPage from './pages/teams.react';
import Workshops from './pages/workshops.react';
import NotFound from './components/notfound.react';
import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';

export default (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} name="home" />

    <Route handler={About} name="about" path="/o-improlize" />
    <Route handler={Contact} name="contact" path="/kontakty" />
    <Route handler={Shows} name="shows" path="/predstaveni" />
    <Route handler={Shows} name="showsArchive" path="/predstaveni/archiv/:month" />
    <Route handler={Workshops} name="workshops" path="/workshopy" />
    <Route handler={Workshops} name="workshopsArchive" path="/workshopy/archiv/:month" />
    <Route handler={Event} name="show" path="/predstaveni/:showId" />
    <Route handler={TeamsPage} name="teams" path="/tymy" />

    <Route handler={News} name="news" path="/novinky" />
    <Route handler={NewsDetail} name="newsDetail" path="/novinky/:newsItemId" />

    <NotFoundRoute handler={NotFound} name="not-found" />
  </Route>
);
