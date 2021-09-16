const route = require('express').Router();
const {
  create,
  getAll,
  getById,
  updateById } = require('../controllers/products');
const {
  productName,
  productQuantity,
  productExistByName,
  productExistById } = require('../middlewares/validations');

route.post('/', productName, productQuantity, productExistByName, create);
route.get('/', getAll);
route.get('/:id', productExistById, getById);
route.put('/:id', productName, productQuantity, productExistById, updateById);

module.exports = route;
