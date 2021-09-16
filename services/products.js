const products = require('../models/products');

const create = async (name, quantity) =>
  products.create(name, quantity).then((data) => data.ops[0]);

const getAll = async () =>
  products.getAll().then((data) => data);

const getById = async (id) =>
  products.getById(id).then((data) => data);

const updateById = async (id, name, quantity) =>
  products.updateById(id, name, quantity).then((data) => data);

module.exports = { create, getAll, getById, updateById };
