const express = require('express');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');

const error = require('../middleware/error');
const routes = require('./routes');

const app = express();

const httpServer = http.createServer(app);

const io = socket(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    method: ['GET', 'POST'],
  },
});

app.use(express.json());

app.use(cors());
app.use(express.static('public'));

require('../sockets/status')(io);

app.use('/login', routes.login);
app.use('/register', routes.register);
app.use('/products', routes.products);
app.use('/sales', routes.sales);
app.use('/user', routes.users);

app.use(error);

module.exports = httpServer;
