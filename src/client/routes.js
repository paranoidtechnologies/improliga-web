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
import {map} from './routeMap';


export default function createRoutes(getState) {
  const state = getState();
  const lang = state.intl.selectedLanguage;

  return (
    <Route component={App} path={map[lang + ':home']}>
      <IndexRoute component={Home} />

      <Route component={About} path={map[lang + ':about']} />
      <Route component={Contact} path={map[lang + ':contact']} />
      <Route component={Shows} path={map[lang + ':shows']} />
      <Route component={Shows} path={map[lang + ':shows:archive']} />
      <Route component={Event} path={map[lang + ':shows:detail']} />

      <Route component={Workshops} path={map[lang + ':workshops']} />
      <Route component={Workshops} path={map[lang + ':workshops:archive']} />

      <Route component={TeamsPage} path={map[lang + ':teams']} />
      <Route component={TeamDetailPage} path={map[lang + ':teams:detail']} />

      <Route component={BlogPage} path={map[lang + ':blog']} />
      <Route component={BlogDetail} path={map[lang + ':blog:detail']} />

      <Route component={NotFound} path="*" />
    </Route>
  );

}
