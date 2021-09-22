const validators = require('../validators/validatorsSales');

const productExistById = async (req, _res, next) => {
  const itensSold = req.body;
  validators.productExistById(itensSold)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

const salesQuantity = async (req, _res, next) => {
  const itensSold = req.body;
  validators.quantit(itensSold)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

const salesExistById = async (req, _res, next) => {
  const { id } = req.params;
  validators.saleExistById(id)
    .then(() => next())
    .catch((err) => next({ status: 404, err }));
};

module.exports = { productExistById, salesQuantity, salesExistById };
