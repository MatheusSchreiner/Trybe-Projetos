const fs = require('fs').promises;

const message = { talkerNotFound: 'Pessoa palestrante não encontrada' };

const getTalkerById = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
  const talker = data.find((e) => e.id === +id);
  if (!talker) return res.status(404).json({ message: message.talkerNotFound });
  return res.status(200).json(talker);
};

module.exports = getTalkerById;
