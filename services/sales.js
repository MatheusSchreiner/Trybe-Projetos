const sales = require('../models/sales');

const create = async (itensSold) =>
  sales.create(itensSold).then((data) => data.ops[0]);

const getAll = async () =>
  sales.getAll().then((data) => data);

const getById = async (id) =>
  sales.getById(id).then((data) => data);

const updateById = async (id, itensSold) =>
  sales.updateById(id, itensSold).then((data) => data);

const deleteById = async (id) =>
  sales.deleteById(id).then((data) => data);

module.exports = { create, getAll, getById, updateById, deleteById };
