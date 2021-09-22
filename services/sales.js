const sales = require('../models/sales');

const create = async (itensSold) => {
  itensSold.forEach((e) =>
    sales.updateStock(e.productId, -e.quantity));
  return sales.create(itensSold).then((data) => data.ops[0]);
};

const getAll = async () =>
  sales.getAll().then((data) => data);

const getById = async (id) =>
  sales.getById(id).then((data) => data);

const updateById = async (id, itensSold) => {
  itensSold.forEach((e) =>
    sales.updateStock(e.productId, -e.quantity));
  return sales.updateById(id, itensSold).then((data) => data);
};

const deleteById = async (id) => {
  const { itensSold } = await sales.getById(id);
  itensSold.forEach((e) =>
    sales.updateStock(e.productId, e.quantity));
  return sales.deleteById(id).then((data) => data);
};

module.exports = { create, getAll, getById, updateById, deleteById };
