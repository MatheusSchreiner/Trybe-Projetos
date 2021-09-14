const err = (message) => (message);

const product = async (name, quantity) => {
  const minLetters = 5;
  if (name.length < minLetters) throw err('Escreve um nome com mais de 5 letras');
  if (typeof quantity !== 'number') throw err('A quantidade precisa ser um número');
  if (quantity.length < 1) throw err('A quantidade tem que ser maior ou igual a 1');
};

module.exports = { product };
