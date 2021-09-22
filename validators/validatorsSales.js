const err = (code, message) => ({ code, message });
const { ObjectId } = require('mongodb');
const products = require('../models/products');
const sales = require('../models/sales');

const INVALID_DATA = 'invalid_data';
const NOT_FOUND = 'not_found';

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

module.exports = { productExistById, quantit, saleExistById, saleExistByIdDelete };
