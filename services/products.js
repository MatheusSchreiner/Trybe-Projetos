const products = require('../models/products');

const create = async (name, quantity) =>
  products.create(name, quantity).then((data) => data.ops[0]);

module.exports = { create };
