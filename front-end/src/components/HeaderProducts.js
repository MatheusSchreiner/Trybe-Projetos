import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function HeaderProducts(props) {
  const { pageName } = props;
  return (
    <>
      { pageName.split('/').includes('customer') && (
        <li className="nav-item pageName">
          <Link
            to="/customer/products"
          >
            PRODUTOS
          </Link>
        </li>)}
      <li className="nav-item pageName">
        <Link
          data-testid="customer_products__element-navbar-link-orders"
          className="yourOrder"
          to={ pageName.split('/').includes('customer') ? '/customer/orders' : '/seller/orders' }
        >
          PEDIDOS
        </Link>
      </li>
    </>
  );
}

HeaderProducts.propTypes = PropTypes.string.isRequired;
