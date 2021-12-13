const fs = require('fs').promises;

const searchTalker = async (req, res, next) => {
  const { name } = req.query;
  const ZERO = 0;
  try {
    const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
    const talkers = data.filter((e) => e.name.includes(name));
    if (talkers.length === ZERO) {
      return res.status(200).json(data);
    }
    return res.status(200).json(talkers);
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = searchTalker;
