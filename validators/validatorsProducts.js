const err = (code, message) => ({ code, message });
const { ObjectId } = require('mongodb');
const products = require('../models/products');

const INVALID_DATA = 'invalid_data';

const nameProduct = async (name) => {
  const minLetters = 5;
  if (typeof name !== 'string') throw err(INVALID_DATA, '"name" must be a string');
  if (name.length < minLetters) {
    throw err(INVALID_DATA, '"name" length must be at least 5 characters long');
  } 
};

const quantityProduct = async (quantity) => {
  if (typeof quantity !== 'number') throw err(INVALID_DATA, '"quantity" must be a number');
  if (quantity < 1) throw err(INVALID_DATA, '"quantity" must be larger than or equal to 1');
};

const existByName = async (name) => {
  const exist = await products.getByName(name);
  if (exist) throw err(INVALID_DATA, 'Product already exists');
};

const existById = async (id) => {
  if (!ObjectId.isValid(id)) throw err(INVALID_DATA, 'Wrong id format');

  const exist = await products.getById(id);
  if (!exist) throw err(INVALID_DATA, 'Id not exists');
};

module.exports = { nameProduct, quantityProduct, existByName, existById };
