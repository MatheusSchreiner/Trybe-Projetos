const express = require('express');
const cors = require('cors');

const error = require('../middleware/error');
const routes = require('./routes');

const app = express();

const httpServer = require('http').createServer(app);

const io = require('socket.io')(httpServer, {
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

httpServer.listen(3002, () => {
  console.log(`Socket online on port: ${3002}`);
});

module.exports = app;
