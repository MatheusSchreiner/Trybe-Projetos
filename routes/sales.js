const route = require('express').Router();
const {
  create,
  getById,
  getAll,
  updateById,
} = require('../controllers/sales');

const {
  productExistById,
  salesQuantity,
  salesExistById,
} = require('../middlewares/validationsSales');

route.post('/', productExistById, salesQuantity, create);
route.get('/', getAll);
route.get('/:id', salesExistById, getById);
route.put('/:id', salesExistById, salesQuantity, updateById);

module.exports = route;
