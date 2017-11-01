import * as http from 'http';
import Api from './api/api';

const config = require('./config/env/config')();

const server = http.createServer(Api);

server.listen(config.server.port, () => {
  console.log(`Listening on port ${config.server.port}.`);
});
