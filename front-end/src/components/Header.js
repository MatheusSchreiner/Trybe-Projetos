import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header(props) {
  const { pageName, yourOrder, userName } = props;

  function logoutUser() {
    localStorage.clear();
  }

  function structureProducts() {
    return (
      <>
        <span
          data-testid="customer_products__element-navbar-link-products"
          className="pageName"
        >
          {pageName}
        </span>
        <span
          data-testid="customer_products__element-navbar-link-orders"
          className="yourOrder"
        >
          MEUS PEDIDOS
        </span>
      </>
    );
  }

  function structureADM() {
    return (
      <span
        data-testid="customer_products__element-navbar-link-orders"
        className="pageName"
      >
        {pageName}
      </span>
    );
  }

  return (
    <header>
      <nav>
        { yourOrder ? structureProducts() : structureADM()}
        <span
          data-testid="customer_products__element-navbar-user-full-name"
          className="UserName"
        >
          {userName}
        </span>
        <button
          type="button"
        >
          <Link
            to="/login"
            data-testid="customer_products__element-navbar-link-logout"
            className="logoutPage"
            onClick={ () => logoutUser() }
          >
            Sair
          </Link>
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = PropTypes.string.isRequired;
