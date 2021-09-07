const route = require('express').Router();

const getTalker = require('../middlewares/getTalker');
const getTalkerById = require('../middlewares/getTalkerById');
const postTalker = require('../middlewares/postTalker');
const putTalker = require('../middlewares/putTalker');
const deleteTalker = require('../middlewares/deleteTalker');
const {
  checkToken, checkName, checkAge, checkTalk, checkWatche, checkRate,
} = require('../middlewares/validationTalker');

route.get('/', getTalker);
route.get('/:id', getTalkerById);
route.post('/', checkToken, checkName, checkAge, checkTalk, checkRate, checkWatche, postTalker);
route.put('/:id', checkToken, checkName, checkAge, checkTalk, checkRate, checkWatche, putTalker);
route.delete('/:id', checkToken, deleteTalker);

module.exports = route;
