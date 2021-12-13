const fs = require('fs').promises;

const putTalker = async (req, res, next) => {
  const { id } = req.params;
  const { name, age, talk } = req.body;
  try {
    const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
    const updateTalker = data.map((e) => (e.id === +id ? { name, age, id: +id, talk } : e)); 
    await fs.writeFile('./talker.json', JSON.stringify(updateTalker));
    return res.status(200).json({ name, age, id: +id, talk });
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = putTalker;
