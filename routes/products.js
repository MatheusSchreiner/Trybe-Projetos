const route = require('express').Router();
const {
  create,
  getAll,
  getById,
  updateById,
  deleteById } = require('../controllers/products');
const {
  productName,
  productQuantity,
  productExistByName,
  productExistById } = require('../middlewares/validations');

route.post('/', productName, productQuantity, productExistByName, create);
route.get('/', getAll);
route.get('/:id', productExistById, getById);
route.put('/:id', productName, productQuantity, productExistById, updateById);
route.delete('/:id', productExistById, deleteById);

module.exports = route;
