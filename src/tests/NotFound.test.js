import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { NotFound } from '../components';

test('se página contém um heading h2 com o texto Page requested not found', () => {
  const { getByRole } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );

  const textH2 = getByRole('heading', {
    name: /Page requested not found/i,
    level: 2,
  });

  expect(textH2).toBeInTheDocument();
});

test('se página mostra a imagem', () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>,
  );

  const img = getByAltText('Pikachu crying because the page requested was not found');

  expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
});
