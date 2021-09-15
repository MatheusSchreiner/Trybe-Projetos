const { ObjectId } = require('mongodb');
const connection = require('./connection');

const collection = async () => connection()
  .then((db) => db.collection('products')); 

const create = async (name, quantity) => collection()
  .then((col) => col.insertOne({ name, quantity }));

const getAll = async () => collection()
  .then((col) => col.find().toArray());

const getById = async (id) => collection()
  .then((col) => col.findOne(ObjectId(id)));

const getByName = async (name) => collection()
  .then((col) => col.findOne({ name }));

const updateById = async (id, name, quantity) => collection()
  .then((col) => col.updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } }));

const removeById = async (id) => collection()
  .then((col) => col.deleteOne({ _id: ObjectId(id) }));

module.exports = { create, getAll, getById, getByName, updateById, removeById };
