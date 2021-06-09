import React from 'react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('renders a reading with the text `Pokédex`', () => {
  const { getByText } = renderWithRouter(<App />);

  const heading = getByText(/Pokédex/i);
  expect(heading).toBeInTheDocument();
});

test(`Teste se o topo da aplicação contém um conjunto 
  fixo de links de navegação.`, () => {
  const { getAllByRole } = renderWithRouter(<App />);

  const allLinks = getAllByRole('link');
  expect(allLinks[0]).toHaveTextContent(/^Home$/);
  expect(allLinks[1]).toHaveTextContent(/^About$/);
  expect(allLinks[2]).toHaveTextContent(/^Favorite Pokémons$/);
});

test('shows the Pokédex when the route is `/`', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  const btnHome = getByRole('link', {
    name: /home/i,
  });

  userEvent.click(btnHome);

  const pathName = history.location.pathname;
  const textH2 = getByRole('heading', {
    name: /Encountered pokémons/i,
    level: 2,
  });

  expect(pathName).toBe('/');
  expect(textH2).toBeInTheDocument();
});

test('se a aplicação é redirecionada para a página About, ao clicar em About', () => {
  const { getByRole, history } = renderWithRouter(<App />);

  const btnAbout = getByRole('link', {
    name: /about/i,
  });

  userEvent.click(btnAbout);

  const pathName = history.location.pathname;
  const textH2 = getByRole('heading', {
    name: /About Pokédex/i,
    level: 2,
  });

  expect(pathName).toBe('/about');
  expect(textH2).toBeInTheDocument();
});

test(`se a aplicação é redirecionada para a página Favorites ao clicar em
Favorite Pokémons`, () => {
  const { getByRole, history } = renderWithRouter(<App />);

  const btnFavorite = getByRole('link', {
    name: /Favorite Pokémons/i,
  });

  userEvent.click(btnFavorite);

  const pathName = history.location.pathname;
  const textH2 = getByRole('heading', {
    name: /Favorite pokémons/i,
    level: 2,
  });

  expect(pathName).toBe('/favorites');
  expect(textH2).toBeInTheDocument();
});

test(`se a aplicação é redirecionada para a página Not Found ao entrar em uma
URL desconhecida`, () => {
  const { getByRole, history } = renderWithRouter(<App />);

  history.push('/123');

  const textH2 = getByRole('heading', {
    name: /Page requested not found/i,
    level: 2,
  });

  expect(textH2).toBeInTheDocument();
});
