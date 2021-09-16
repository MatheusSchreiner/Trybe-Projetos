const route = require('express').Router();
const {
  create,
  getAll,
  getById } = require('../controllers/products');
const {
  productName,
  productQuantity,
  productExistByName,
  productExistById } = require('../middlewares/validations');

route.post('/', productName, productQuantity, productExistByName, create);
route.get('/', getAll);
route.get('/:id', productExistById, getById);

module.exports = route;
