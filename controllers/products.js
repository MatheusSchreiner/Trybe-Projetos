const products = require('../services/products');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  products.create(name, quantity)
    .then((data) => res.status(201).json(data));
};

const getAll = async (_req, res) => {
  products.getAll()
    .then((data) => res.status(200).json(data));
};

const getById = async (req, res) => {
  const { id } = req.params;
  products.getById(id)
    .then((data) => res.status(200).json(data));
};

module.exports = { create, getAll, getById };
