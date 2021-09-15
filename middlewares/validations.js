const validators = require('../validators/validators');

const productName = async (req, _res, next) => {
  const { name } = req.body;
  validators.nameProduct(name)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

const productQuantity = async (req, _res, next) => {
  const { quantity } = req.body;
  validators.quantityProduct(quantity)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

const productExist = async (req, _res, next) => {
  const { name } = req.body;
  validators.existByName(name)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

module.exports = { productName, productQuantity, productExist };
