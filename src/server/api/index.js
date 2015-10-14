import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import {fetchShows, fetchWorkshops, fetchEventDetail} from './events';
import {fetchNewsItemDetail, fetchNews} from './news';

// Create general-purpose API sub-app
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/news', fetchNews);
app.use('/news/:newsItemId', fetchNewsItemDetail);
app.use('/shows', fetchShows);
app.use('/workshops', fetchWorkshops);
app.use('/events/:eventId', fetchEventDetail);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
