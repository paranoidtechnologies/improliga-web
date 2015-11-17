import api from './api';
import config from './config';
import {healthCheck} from './lib/health';
import serverConfig from './lib/config';
import errorHandler from './lib/errorhandler';
import express from 'express';
import frontend from './frontend';
import {preloadEventDetail} from './frontend/preload';

const app = express();

app.use(serverConfig);

app.use('/api/1', api);
app.use('/health', healthCheck);
app.use('/predstaveni/:eventId$', preloadEventDetail);
app.use(frontend);
app.use(errorHandler);

app.listen(config.port, () => {
  var env = process.env.NODE_ENV;

  env = env.charAt(0).toUpperCase() + env.slice(1);
  console.log('%s server started at port %s', env, config.port);
});
