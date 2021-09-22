const err = (code, message) => ({ code, message });
const { ObjectId } = require('mongodb');
const products = require('../models/products');
const sales = require('../models/sales');

const INVALID_DATA = 'invalid_data';
const NOT_FOUND = 'not_found';
const STOCK_PROBLEM = 'stock_problem';

const productExistById = async (itensSold) => {
  const prod = await products.getAll();
  const response = itensSold.every(({ productId }) =>
    prod.some(({ _id }) => productId === _id.toString()));
  if (!response) throw err(INVALID_DATA, 'Wrong product ID or invalid quantity');
};

const quantit = async (itensSold) => {
  const isValid = itensSold.every(({ quantity }) =>
    (typeof quantity === 'number') && (quantity > 0));
  if (!isValid) throw err(INVALID_DATA, 'Wrong product ID or invalid quantity');
};

const saleExistById = async (id) => {
  if (!ObjectId.isValid(id)) throw err(NOT_FOUND, 'Sale not found');

  const exist = await sales.getById(id);
  if (!exist) throw err(NOT_FOUND, 'Sale not found');
};

const saleExistByIdDelete = async (id) => {
  if (!ObjectId.isValid(id)) throw err(INVALID_DATA, 'Wrong sale ID format');

  const exist = await sales.getById(id);
  if (!exist) throw err(INVALID_DATA, 'Wrong sale ID format');
};

const stock = async (itensSold) => {
  const prod = await products.getAll();
  const response = itensSold.every((e) =>
    prod.some(({ _id, quantity }) =>
      (e.productId === _id.toString() && quantity >= e.quantity)));
  if (!response) throw err(STOCK_PROBLEM, 'Such amount is not permitted to sell');
};

module.exports = { productExistById, quantit, saleExistById, saleExistByIdDelete, stock };
