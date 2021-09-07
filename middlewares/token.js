const crypto = require('crypto');

const token = (_req, res) => {
  const number = crypto.randomBytes(8).toString('hex');
  return res.status(200).json({ number });
};

module.exports = token;
