const fs = require('fs').promises;

const postTalker = async (req, res, next) => {
  const { name, age, talk } = req.body;
  try {
    const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
    const talker = { name, age, id: data.length + 1, talk };
    await fs.writeFile('./talker.json', JSON.stringify([...data, talker]));
    return res.status(201).json(talker);
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = postTalker;
