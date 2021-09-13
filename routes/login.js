const express = require('express');
const { login } = require('../middlewares');
const { checkEmail, checkPassword } = require('../middlewares/validators');

const route = express.Router();

route.post('/', checkEmail, checkPassword, login);

module.exports = route;
