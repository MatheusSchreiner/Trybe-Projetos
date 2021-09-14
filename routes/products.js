const route = require('express').Router();
const validations = require('../middlewares/validations');

route.post('/', validations.productReq);
