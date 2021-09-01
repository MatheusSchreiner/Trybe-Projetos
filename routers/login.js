const route = require('express').Router();
const postToken = require('../middlewares/postToken');
const { checkEmail, checkPassword } = require('../middlewares/validationLogin');

route.post('/', checkEmail, checkPassword, postToken);

module.exports = route;
