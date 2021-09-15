const connection = require('./connection');
const { ObjectId } = require('mongodb');

const collection = () => connection()
  .then((db) => db.collection('sales'));

