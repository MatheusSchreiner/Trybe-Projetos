const ObjectId = require('mongodb');
const connection = require('./connection');

const collection = async () => connection()
  .then((db) => db.collection('sales'));

const getAll = async () => collection()
  .then((col) => col.find().toArray());

const getById = async (id) => collection()
  .then((col) => col.findOne(ObjectId(id)));

const create = async (itensSold) => collection()
  .then((col) => col.insertOne({ itensSold }));

const updateById = async (id, itensSold) => collection()
  .then((col) => col.updateOne({ _id: ObjectId(id) }, { $set: { itensSold } }));

module.exports = { getAll, getById, create, updateById };
