const products = require('../services/products');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  products.create(name, quantity)
    .then(({ status, data }) => res.status(status).json(data));
};

module.exports = { create };
