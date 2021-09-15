const err = (code, message) => ({ code, message });

const product = async (name, quantity) => {
  const minLetters = 5;
  const code = 'Invalid_data';
  if (name.length < minLetters) throw err(code, 'Escreve um nome com mais de 5 letras');
  if (typeof quantity !== 'number') throw err(code, 'A quantidade precisa ser um número');
  if (quantity.length < 1) throw err(code, 'A quantidade tem que ser maior ou igual a 1');
};

module.exports = { product };
