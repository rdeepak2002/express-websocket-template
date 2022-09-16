import { Server } from 'socket.io';

const createServer = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log('User connected to web socket: ', socket);
  });
};

const socket = {
  createServer,
};

export default socket;
