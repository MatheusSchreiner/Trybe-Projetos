const err = (code, message) => ({ code, message });
// const INVALID_DATA = 'invalid_data';
// const NOT_FOUND = 'not_found';
const { ObjectId } = require('mongodb');
const products = require('../models/products');
const sales = require('../models/sales');

const sale = async (itensSold) => {
  const minLength = 0;
  const isValid = itensSold.every(({ quantity }) =>
    (typeof quantity === 'number' && quantity > minLength));
  if (!isValid) throw err('invalid_data', 'Wrong product ID or invalid quantity');
};

const saleExists = async (id) => {
  if (!ObjectId.isValid(id)) throw err('not_found', 'Sale not found');
  const exists = await sales.getById(id);
  if (!exists) throw err('not_found', 'Sale not found');
};

const saleId = async (id) => {
  if (!ObjectId.isValid(id)) throw err('invalid_data', 'Wrong sale ID format');
};

const stock = async (itensSold) => {
  const arr = await products.getAll();
  const available = itensSold.every(({ productId, quantity }) => {
    const stocks = arr.find((e) => e.id.toString() === productId);
    return stocks.quantity >= quantity;
  });
  if (!available) throw err('stock_problem', 'Such amount is not permitted to sell');
};

module.exports = { sale, saleExists, saleId, stock };
