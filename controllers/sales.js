const sales = require('../services/sales');

const create = async (req, res) => {
  const itensSold = req.body;
  sales.create(itensSold)
    .then((data) => res.status(200).json(data));
};

const getAll = async (_req, res) => {
  sales.getAll()
    .then((data) => res.status(200).json(data));
};

const getById = async (req, res) => {
  const { id } = req.params;
  sales.getById(id)
    .then((data) => res.status(200).json(data));
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const itensSold = req.body;
  sales.updateById(id, itensSold)
    .then(() => res.status(200).json({ _id: id, itensSold }));
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  sales.deleteById(id)
    .then((data) => res.status(200).json(data));
};

module.exports = { create, getAll, getById, updateById, deleteById };
