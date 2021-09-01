const invalidEmail = 'O "email" deve ter o formato "email@email.com"';
const invalidPassword = 'O "password" deve ter pelo menos 6 caracteres';

const checkEmail = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!email) { return res.status(400).json({ message: 'O campo "email" é obrigatório' }); }
  if (!emailRegex) { return res.status(400).json({ message: invalidEmail }); }
  next();
};

const checkPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) { return res.status(400).json({ message: 'O campo "password" é obrigatório' }); }
  if (password.length < 6) { return res.status(400).json({ message: invalidPassword }); }
  next();
};

module.exports = {
  checkEmail,
  checkPassword,
};
