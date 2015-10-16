import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import {fetchShows, fetchWorkshops, fetchEventDetail} from './events';
import {fetchBlog, fetchBlogArticleDetail} from './blog';
import {fetchTeamDetail, fetchTeamList} from './teams';

// Create general-purpose API sub-app
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/news/:newsItemId', fetchBlogArticleDetail);
app.use('/news', fetchBlog);
app.use('/shows', fetchShows);
app.use('/workshops', fetchWorkshops);
app.use('/events/:eventId', fetchEventDetail);
app.use('/teams/:teamId', fetchTeamDetail);
app.use('/teams', fetchTeamList);

app.on('mount', () => {
  console.log('Api is available at %s', app.mountpath);
});

export default app;
