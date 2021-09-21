const route = require('express').Router();

const {
  create,
  getAll,
  getById,
  update,
  remove,
} = require('../controllers/sales');

const {
  sale,
  saleExists,
  saleId,
  stock,
} = require('../middlewares/validationsSales');

route.post('/', sale, stock, create);
route.get('/', getAll);
route.get('/:id', saleExists, getById);
route.put('/:id', sale, update);
route.delete('/:id', saleId, saleExists, remove);

module.exports = route;
