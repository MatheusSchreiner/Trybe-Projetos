const route = require('express').Router();

const getTalker = require('../middlewares/getTalker');
const getTalkerById = require('../middlewares/getTalkerById');
const postTalker = require('../middlewares/postTalker');
const putTalker = require('../middlewares/putTalker');
const deleteTalker = require('../middlewares/deleteTalker');
const searchTalker = require('../middlewares/searchTalker');
const {
  checkToken, checkName, checkAge, checkTalk, checkWatche, checkRate,
} = require('../middlewares/validationTalker');

route.get('/', getTalker);
route.get('/search', searchTalker);
route.get('/:id', getTalkerById);
route.use(checkToken);
route.post('/', checkName, checkAge, checkTalk, checkRate, checkWatche, postTalker);
route.put('/:id', checkName, checkAge, checkTalk, checkRate, checkWatche, putTalker);
route.delete('/:id', deleteTalker);

module.exports = route;
