const fs = require('fs').promises;

const getTalkerById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile('talker.json').then((f) => JSON.parse(f));
    const talker = data.find((e) => e.id === +id);

    if (!talker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
    }

    return res.status(200).json(talker);
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = getTalkerById;
