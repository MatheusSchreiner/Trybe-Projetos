const route = require('express').Router();

const getTalker = require('../middlewares/getTalker');

route.get('/', getTalker);

module.exports = route;
