const fs = require('fs').promises;

const editTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const { id } = req.params;
  const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
  const arr = data.map((e) => (e.id === +id ? { name, age, id: +id, talk } : e));
  await fs.writeFile('./talker.json', JSON.stringify(arr));
  return res.status(200).json({ name, age, id: +id, talk });
};

module.exports = editTalker;
