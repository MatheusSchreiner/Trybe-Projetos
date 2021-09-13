const route = require('express').Router();
const token = require('../middlewares/token');
const { checkEmail, checkPassword } = require('../middlewares/validationLogin');

route.post('/', checkEmail, checkPassword, token);

module.exports = route;
