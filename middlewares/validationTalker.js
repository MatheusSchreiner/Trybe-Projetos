const erroName = 'O "name" deve ter pelo menos 3 caracteres';
const erroAge = 'A pessoa palestrante deve ser maior de idade';
const erroTalk = 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios';
const erroRate = 'O campo "rate" deve ser um inteiro de 1 à 5';
const erroWatch = 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"';

const checkToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token não encontrado' });
  if (token.length !== 16) return res.status(401).json({ message: 'Tojen inválido' });
  next();
};

const checkName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  if (name.length < 3) return res.status(400).json({ message: erroName });
  next();
};

const checkAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (age < 18) return res.status(400).json({ message: erroAge });
  next();
};

const checkTalk = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;
  if (!talk || !watchedAt || !rate) return res.status(400).json({ message: erroTalk });
  next();
};

const checkRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (rate < 1 || rate > 5) return res.status(400).json({ message: erroRate });
  next();
};

const checkWatche = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(watchedAt);
  if (!regex) return res.status(400).json({ message: erroWatch });
  next();
};

module.exports = {
 checkToken, checkName, checkAge, checkTalk, checkWatche, checkRate,
};
