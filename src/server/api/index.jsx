import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import {fetchShows} from './events';
import {fetchNews} from './news';

// Create general-purpose API sub-app
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/events/shows', fetchShows);
app.use('/events/news', fetchNews);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
