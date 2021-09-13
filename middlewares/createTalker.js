const fs = require('fs').promises;

const createTalker = async (req, res) => {
  const { name, age, talk } = req.body;
  const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
  const talker = { name, age, id: data.length + 1, talk };
  await fs.writeFile('./talker.json', JSON.stringify([...data, talker]));
  return res.status(201).json(talker);
};

module.exports = createTalker;
