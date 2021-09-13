const fs = require('fs').promises;

const searchTalker = async (req, res) => {
  const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
  const arr = data.filter((e) => e.name.includes(req.query.q));
  return res.status(200).json(arr);
};

module.exports = searchTalker;
