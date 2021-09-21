const validators = require('../validators/validatorsSales');

const sale = (req, _res, next) => validators.sale([...req.body])
  .then(() => next())
  .catch((err) => next({ status: 422, err }));

const saleExists = (req, _res, next) => validators.saleExists(req.params.id)
  .then(() => next())
  .catch((err) => next({ status: 404, err }));

const saleId = (req, _res, next) => validators.saleId(req.params.id)
  .then(() => next())
  .catch((err) => next({ status: 422, err }));

const stock = async (req, _res, next) => validators.stock([...req.body])
  .then(() => next())
  .catch((err) => next({ status: 404, err }));

module.exports = { sale, saleExists, saleId, stock };
