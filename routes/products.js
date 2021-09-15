const route = require('express').Router();
const products = require('../controllers/products');
const {
  productName,
  productQuantity,
  productExist } = require('../middlewares/validations');

route.post('/', productName, productQuantity, productExist, products.create);

module.exports = route;
