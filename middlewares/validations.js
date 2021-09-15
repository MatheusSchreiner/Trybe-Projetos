const validations = require('../validations/validations');

const productReq = async (req, _res, next) => {
  const { name, quantity } = req.body;
  validations.product(name, quantity)
    .then(() => next())
    .catch((err) => next({ status: 422, err }));
};

module.exports = { productReq };
