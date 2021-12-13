import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import Pokemons from '../data';

function testAllPokemons(getByTestId, btnNext) {
  Pokemons.forEach((pokemon) => {
    const pokemonId = getByTestId('pokemon-name');
    expect(pokemonId.textContent).toBe(pokemon.name);
    userEvent.click(btnNext);
  });
}

test('se página contém um heading h2 com o texto Encountered pokémons.', () => {
  const { getByRole } = renderWithRouter(<App />);

  const textH2 = getByRole('heading', {
    name: /Encountered pokémons/i,
    nivel: 2,
  });

  expect(textH2).toBeInTheDocument();
});

test(`se é exibido o próximo Pokémon da lista quando 
o botão Próximo pokémon é clicado.`, () => {
  const { getByRole, getByTestId } = renderWithRouter(<App />);

  const btnNext = getByRole('button', {
    name: /Próximo pokémon/i,
  });

  expect(btnNext).toBeInTheDocument();

  testAllPokemons(getByTestId, btnNext);
});

test(`o primeiro Pokémon da lista deve ser mostrado ao clicar no botão,
se estiver no último Pokémon da lista;`, () => {
  const { getByRole, getByTestId } = renderWithRouter(<App />);

  const btnNext = getByRole('button', {
    name: /Próximo pokémon/i,
  });
  const { length } = Pokemons;

  for (let i = 0; i < length; i += 1) {
    userEvent.click(btnNext);
  }

  const pokemonId = getByTestId('pokemon-name');
  expect(pokemonId.textContent).toBe(Pokemons[0].name);
});

test('se a Pokédex tem os botões de filtro.', () => {
  const { getAllByRole, getByTestId } = renderWithRouter(<App />);

  const btnType = getAllByRole('button');

  for (let i = 1; i < (btnType.length - 1); i += 1) {
    const type = getByTestId('pokemon-type');
    userEvent.click(btnType[i]);
    expect(btnType[i].textContent).toBe(type.textContent);
  }
});

test('se a Pokédex contém um botão para resetar o filtro', () => {
  const { getByRole, getByTestId } = renderWithRouter(<App />);

  const btnAll = getByRole('button', {
    name: /All/i,
  });
  const btnNext = getByRole('button', {
    name: /Próximo pokémon/i,
  });

  expect(btnAll).toBeInTheDocument();
  userEvent.click(btnAll);

  testAllPokemons(getByTestId, btnNext);
});

test('se é criado, dinamicamente, um botão de filtro para cada tipo de Pokémon.', () => {
  const { getAllByTestId } = renderWithRouter(<App />);
  const targetButton = getAllByTestId('pokemon-type-button');

  expect(targetButton[0]).toHaveTextContent('Electric');
  expect(targetButton[1]).toHaveTextContent('Fire');
  expect(targetButton[2]).toHaveTextContent('Bug');
  expect(targetButton[3]).toHaveTextContent('Poison');
  expect(targetButton[4]).toHaveTextContent('Psychic');
  expect(targetButton[5]).toHaveTextContent('Normal');
  expect(targetButton[6]).toHaveTextContent('Dragon');
});

test('se o botão Próximo pokémon é desabilitado', () => {
  const { getAllByRole, getByText } = renderWithRouter(<App />);

  const targetButton = getAllByRole('button');
  const bugButton = targetButton[3];
  const nextButton = getByText(/próximo pokémon/i);

  userEvent.click(bugButton);
  expect(nextButton).toBeDisabled();

  const normalButton = targetButton[6];
  userEvent.click(normalButton);
  expect(nextButton).toBeDisabled();
});
