const express = require('express');
const bodyParser = require('body-parser');

const talker = require('./routers/talker');
const login = require('./routers/login');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use((_err, _req, res, _next) => res.status(500).json({ message: 'Erro desconhecido' }));
app.use('/talker', talker);
app.use('/login', login);

app.listen(PORT, () => {
  console.log('Online');
});
