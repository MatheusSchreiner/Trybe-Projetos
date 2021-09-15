const products = require('../models/products');

const create = async (name, quantity) => {
  products.create(name, quantity)
    .then((data) => ({ status: 201, data })); 
};

module.exports = { create };
