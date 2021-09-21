const route = require('express').Router();

const {
  create,
} = require('../controllers/sales');

const {
  sale,
  saleExists,
  saleId,
  stock,
} = require('../middlewares/validationsSales');

route.post('/', create);

module.exports = route;
