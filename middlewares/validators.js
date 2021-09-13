const message = {
  emptyEmail: 'O campo "email" é obrigatório',
  invalidEmail: 'O "email" deve ter o formato "email@email.com"',
  emptyPassword: 'O campo "password" é obrigatório',
  invalidPassword: 'O "password" deve ter pelo menos 6 caracteres',
  tokenNotFound: 'Token não encontrado',
  invalidToken: 'Token inválido',
  emptyName: 'O campo "name" é obrigatório',
  invalidName: 'O "name" deve ter pelo menos 3 caracteres',
  emptyAge: 'O campo "age" é obrigatório',
  invalidAge: 'A pessoa palestrante deve ser maior de idade',
  invalidWatchedAt: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
  invalidRate: 'O campo "rate" deve ser um inteiro de 1 à 5',
  emptyTalk: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
};

const checkEmail = (req, _res, next) => {
  const { email } = req.body;
  const emailRegex = /^[\w.]+@[a-z]+\.\w{2,3}$/g.test(email);
  if (!email) return next({ code: 400, message: message.emptyEmail });
  if (!emailRegex) return next({ code: 400, message: message.invalidEmail });
  next();
};

const checkPassword = (req, _res, next) => {
  const { password } = req.body;
  const passwordRegex = /[\w\D]{6}/g.test(password);
  if (!password) return next({ code: 400, message: message.emptyPassword });
  if (!passwordRegex) return next({ code: 400, message: message.invalidPassword });
  next();
};

const checkToken = (req, _res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return next({ code: 401, message: message.tokenNotFound });
  if (token.length !== 16) return next({ code: 401, message: message.invalidToken });
  next();
};

const checkName = (req, _res, next) => {
  const { name } = req.body;
  if (!name) return next({ code: 400, message: message.emptyName });
  if (name.length < 3) return next({ code: 400, message: message.invalidName });
  next();
};

const checkAge = (req, _res, next) => {
  const { age } = req.body;
  if (!age) return next({ code: 400, message: message.emptyAge });
  if (age < 18) return next({ code: 400, message: message.invalidAge });
  next();
};

const checkTalk = (req, _res, next) => {
  const { talk } = req.body;
  if (!talk) return next({ code: 400, message: message.emptyTalk });
  next();
};

const checkWatchedAt = (req, _res, next) => {
  const { talk: { watchedAt } } = req.body;
  if (!watchedAt) return next({ code: 400, message: message.emptyTalk });
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(watchedAt);
  if (!regex) return next({ code: 400, message: message.invalidWatchedAt });
  next();
};

const checkRate = (req, _res, next) => {
  const { talk: { rate } } = req.body;
  if (rate < 1 || rate > 5) return next({ code: 400, message: message.invalidRate });
  if (!rate) return next({ code: 400, message: message.emptyTalk });
  next();
};

module.exports = {
  checkEmail, checkPassword, checkToken, checkName, checkAge, checkTalk, checkWatchedAt, checkRate,
};
