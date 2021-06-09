import React from 'react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../components';

test(' se a página contém um heading h2 com o texto About Pokédex.', () => {
  const { getByRole } = renderWithRouter(<About />);

  const textH2 = getByRole('heading', {
    name: /About Pokédex/i,
    level: 2,
  });

  expect(textH2).toBeInTheDocument();
});

test('se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
  const { getByText } = renderWithRouter(<About />);

  const paragraph1 = getByText('This application simulates a Pokédex, a'
  + ' digital encyclopedia containing all Pokémons');
  const paragraph2 = getByText('One can filter Pokémons by type, and'
  + ' see more details for each one of them');

  expect(paragraph1).toBeInTheDocument();
  expect(paragraph2).toBeInTheDocument();
});

test('se a página contém a seguinte imagem de uma Pokédex', () => {
  const { getByAltText } = renderWithRouter(<About />);

  const img = getByAltText('Pokédex');
  expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
