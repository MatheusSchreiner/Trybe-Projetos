const err = (code, message) => ({ code, message });
const products = require('../models/products');

const nameProduct = async (name) => {
  const minLetters = 5;
  const code = 'Invalid_data';
  if (typeof name !== 'string') throw err(code, 'O nome precisa ser um texto');
  if (name.length < minLetters) throw err(code, 'Escreve um nome com mais de 5 letras');
};

const quantityProduct = async (quantity) => {
  const code = 'Invalid_data';
  if (typeof quantity !== 'number') throw err(code, 'A quantidade precisa ser um número');
  if (quantity.length < 1) throw err(code, 'A quantidade tem que ser maior ou igual a 1');
};

const existByName = async (name) => {
  const code = 'Invalid_data';
  const exist = await products.getByName(name);
  if (exist) throw err(code, 'Este produto já existe');
};

module.exports = { nameProduct, quantityProduct, existByName };
