import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
}));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

io.on('connection', (socket) => {
  console.log('User connected to web socket: ', socket);
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
