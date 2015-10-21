import api from './api';
import config from './config';
import {healthCheck} from './lib/health';
import serverConfig from './lib/config';
import errorHandler from './lib/errorhandler';
import express from 'express';
import frontend from './frontend';
import {Server} from 'http';

const app = express();
const server = Server(app);

app.use(serverConfig);

// Load API.
app.use('/api/1', api);

// Elastic beanstalk health check
app.use('/health', healthCheck);

// Load react-js frontend.
app.use(frontend);

// Error reporting
app.use(errorHandler);

server.listen(config.port, () => {
  console.log('Server started at port %s', config.port);
});
