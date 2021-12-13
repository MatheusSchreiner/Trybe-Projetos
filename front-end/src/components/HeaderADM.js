import React from 'react';
import PropTypes from 'prop-types';

export default function HeaderADM(props) {
  const { pageName } = props;
  return (
    <span
      data-testid="customer_products__element-navbar-link-orders"
      className="pageName"
    >
      {pageName}
    </span>
  );
}

HeaderADM.propTypes = PropTypes.string.isRequired;
