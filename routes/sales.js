const route = require('express').Router();
const {
  create,
  getById,
  getAll,
  updateById,
  deleteById,
} = require('../controllers/sales');

const {
  productExistById,
  salesQuantity,
  saleExistById,
  saleExistByIdDelete,
} = require('../middlewares/validationsSales');

route.post('/', productExistById, salesQuantity, create);
route.get('/', getAll);
route.get('/:id', saleExistById, getById);
route.put('/:id', saleExistById, salesQuantity, updateById);
route.delete('/:id', saleExistByIdDelete, deleteById);

module.exports = route;
