import About from './pages/about.react';
import App from './app/app.react';
import Contact from './pages/contact.react';
import Home from './pages/home.react';
import BlogPage from './pages/blog.react';
import BlogDetail from './pages/blog/detail.react';
import Event from './pages/event.react';
import Shows from './pages/shows.react';
import TeamsPage from './pages/teams.react';
import TeamDetailPage from './pages/teams/detail.react';
import Workshops from './pages/workshops.react';
import NotFound from './pages/notfound.react';
import React from 'react';
import {IndexRoute, Route} from 'react-router';

export default function createRoutes(getState) {

  return (
    <Route component={App} name="base" path="/">
      <IndexRoute component={Home} name="home" />

      <Route component={About} name="about" path="/o-improlize" />
      <Route component={Contact} name="contact" path="/kontakty" />
      <Route component={Shows} name="shows" path="/predstaveni" />
      <Route component={Shows} name="showsArchive" path="/predstaveni/archiv/:month" />
      <Route component={Workshops} name="workshops" path="/workshopy" />
      <Route component={Workshops} name="workshopsArchive" path="/workshopy/archiv/:month" />
      <Route component={Event} name="show" path="/predstaveni/:showId" />
      <Route component={TeamsPage} name="teams" path="/tymy" />
      <Route component={TeamDetailPage} name="teamDetail" path="/tymy/:teamId" />
      <Route component={BlogPage} name="blog" path="/blog" />
      <Route component={BlogDetail} name="blogDetail" path="/blog/:blogItemId" />
      <Route path="*" component={NotFound} />
    </Route>
  );

}
