const fs = require('fs/promises');

const getATalkers = async (_req, res, next) => {
  try {
    const data = await fs.readFile('talker.json').then((f) => JSON.parse(f));
    return res.status(200).json(data);
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json({ ERROR: err }); }
    next(err);
  }
};

module.exports = getATalkers;

/* OU

const fs = require('fs').promises;

const getTalker = async (_req, res, next) => {
  try {
    const dataJson = await fs.readFile('talker.json');
    const data = JSON.parse(dataJson);
    res.status(200).json(data);
  } catch (err) {
    if (err.code === 'ENOENT') { return res.status(400).json(err); }
    next(err);
  }
};

module.exports = getTalker;
*/
