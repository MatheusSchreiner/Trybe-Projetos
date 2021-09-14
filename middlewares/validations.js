const validations = require('../validations/validations');

const productReq = async (req, _res, next) => {
  const { name, quantity } = req.body;
  validations.product(name, quantity)
    .then(() => next())
    .catch((message) => next({ status: 422, message }));
};

module.exports = { productReq };
