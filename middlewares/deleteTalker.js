const fs = require('fs').promises;

const deleteTalker = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await fs.readFile('talker.json', 'utf8').then((f) => JSON.parse(f));
    const updateTalker = data.filter((e) => e.id !== +id);
    await fs.writeFile('./talker.json', JSON.stringify(updateTalker));
    return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = deleteTalker;
