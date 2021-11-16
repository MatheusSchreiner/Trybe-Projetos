import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { pageName, yourOrder, userName } = props;

  function structure(status) {
    if (status === 'MEUS PEDIDOS') {
      return (
        <ul>
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            {pageName}
          </li>
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            {status}
          </li>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {userName}
          </li>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </li>
        </ul>
      );
    }
  }
  return (
    <header>
      <nav>

        {structure(yourOrder)}

      </nav>

    </header>
  );
}

Header.propTypes = PropTypes.string.isRequired;
