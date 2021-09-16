const err = (code, message) => ({ code, message });
const INVALID_DATA = 'invalid_data';
// const NOT_FOUND = 'not_found';
const { ObjectId } = require('mongodb');
const products = require('../models/products');

const nameProduct = async (name) => {
  const minLetters = 5;
  const code = INVALID_DATA;
  if (typeof name !== 'string') throw err(code, '"name" must be a string');
  if (name.length < minLetters) {
    throw err(code, '"name" length must be at least 5 characters long');
  } 
};

const quantityProduct = async (quantity) => {
  const code = INVALID_DATA;
  if (typeof quantity !== 'number') throw err(code, '"quantity" must be a number');
  if (quantity < 1) throw err(code, '"quantity" must be larger than or equal to 1');
};

const existByName = async (name) => {
  const code = INVALID_DATA;
  const exist = await products.getByName(name);
  if (exist) throw err(code, 'Product already exists');
};

const existById = async (id) => {
  const code = INVALID_DATA;
  if (!ObjectId.isValid(id)) throw err(code, 'Wrong id format');

  const exist = await products.getById(id);
  if (!exist) throw err(code, 'Id not exists');
};

module.exports = { nameProduct, quantityProduct, existByName, existById };
