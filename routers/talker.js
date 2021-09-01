const route = require('express').Router();

const getTalker = require('../middlewares/getTalker');
const getTalkerById = require('../middlewares/getTalkerById');

route.get('/', getTalker);
route.get('/:id', getTalkerById);

module.exports = route;
