const products = require('../services/products');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  products.create(name, quantity)
    .then((data) => res.status(201).json(data));
};

module.exports = { create };
