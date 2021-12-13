import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { FavoritePokemons } from '../components';

test(`se é exibido na tela a mensagem No favorite pokemon found, 
se a pessoa não tiver pokémons favoritos.`, () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={ ['/favorites'] }>
      <FavoritePokemons />
    </MemoryRouter>,
  );

  const textNoFavorite = getByText(/No favorite pokemon found/i);
  expect(textNoFavorite).toBeInTheDocument();
});

test('se é exibido todos os cards de pokémons favoritados.', () => {
  const { getByLabelText, getByRole, getByTestId } = render(
    <MemoryRouter initialEntries={ ['/pokemons/25'] }>
      <App />
    </MemoryRouter>,
  );

  const favorite = getByLabelText(/Pokémon favoritado?/i);
  const linkFavorite = getByRole('link', {
    name: /Favorite Pokémons/i,
  });
  userEvent.click(favorite);
  userEvent.click(linkFavorite);

  const pokemon = getByTestId('pokemon-name');
  expect(pokemon).toBeInTheDocument();
});
