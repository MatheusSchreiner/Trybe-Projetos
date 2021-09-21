const { ObjectId } = require('mongodb');
const connection = require('./connection');

const collection = async () => connection()
  .then((db) => db.collection('sales'));

const create = async (itemSold) => collection()
  .then((col) => col.insertOne({ itemSold }));

const getById = async ({ id }) => collection()
  .then((col) => col.findOne({ _id: ObjectId(id) }));

const getAll = async () => collection()
  .then((col) => col.find().toArray());

const updateById = async ({ id, itemSold }) => collection()
  .then((col) => col.updateOne({ _id: ObjectId(id) }, { $set: { itemSold } }));

const removeById = async ({ id }) => collection()
  .then((col) => col.deleteOne({ _id: ObjectId(id) }));

  const updateStock = (id, quantity) => connection().then((db) =>
  db.collection('products').updateOne({ _id: ObjectId(id) }, { $inc: { quantity } }));

module.exports = { create, getAll, getById, updateById, removeById, updateStock };
