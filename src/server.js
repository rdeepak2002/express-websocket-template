import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import socket from './socket/socket';
import ExampleController from './controller/example';
import { specs, swaggerUI } from './api-docs/api-docs';

// create express application
const app = express();

// configure server
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

// routes
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(ExampleController);

// create web socket server
const server = app.listen(process.env.port || 8080);
socket.createServer(server);
console.log(`App listening on port ${server.address().port}`);
