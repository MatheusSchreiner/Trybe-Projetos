const fs = require('fs').promises;

const message = { deleteTalker: 'Pessoa palestrante deletada com sucesso' };

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
  const arr = data.filter((e) => e.id !== +id);
  await fs.writeFile('./talker.json', JSON.stringify(arr));
  return res.status(200).json({ message: message.deleteTalker });
};

module.exports = deleteTalker;
