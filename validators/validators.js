const err = (code, message) => ({ code, message });
const products = require('../models/products');

const nameProduct = async (name) => {
  const minLetters = 5;
  const code = 'invalid_data';
  if (typeof name !== 'string') {
    throw err(code, '"name" must be a string');
  }
  if (name.length < minLetters) {
    throw err(code, '"name" length must be at least 5 characters long');
  } 
};

const quantityProduct = async (quantity) => {
  const code = 'invalid_data';
  if (typeof quantity !== 'number') {
    throw err(code, '"quantity" must be a number');
  }
  if (quantity < 1) {
    throw err(code, '"quantity" must be larger than or equal to 1');
  }
};

const existByName = async (name) => {
  const code = 'invalid_data';
  const exist = await products.getByName(name);
  if (exist) throw err(code, 'Product already exists');
};

module.exports = { nameProduct, quantityProduct, existByName };
