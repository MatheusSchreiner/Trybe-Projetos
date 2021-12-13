const products = require('../services/products');

const create = async (req, res) => {
  const { name, quantity } = req.body;
  products.create(name, quantity)
    .then((data) => res.status(201).json(data));
};

const getAll = async (_req, res) => {
  products.getAll()
    .then((data) => res.status(200).json({ products: data }));
};

const getById = async (req, res) => {
  const { id } = req.params;
  products.getById(id)
    .then((data) => res.status(200).json(data));
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  products.updateById(id, name, quantity)
    .then(() => res.status(200).json({ _id: id, name, quantity }));
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  products.deleteById(id)
    .then(() => res.status(200).json({ _id: id, name, quantity }));
};

module.exports = { create, getAll, getById, updateById, deleteById };
