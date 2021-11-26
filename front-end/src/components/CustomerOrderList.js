import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsOrderList({ sale }) {
  return (
    <>
      <h3> Produtos </h3>
      {sale[0] && sale[0].products.map((product, index) => (
        <li key={ product.id }>
          <span
            data-testid={
              `customer_order_details__element-order-table-item-number-${index}`
            }
          >
            {product.id}

          </span>
          {' '}
          -
          <span
            data-testid={
              `customer_order_details__element-order-table-name-${index}`
            }
          >
            {product.name}

          </span>
          {' '}
          -
          <span
            data-testid={
              `customer_order_details__element-order-table-quantity-${index}`
            }
          >
            {product.SalesProduct.quantity}

          </span>
          {' '}
          -
          <span
            data-testid={
              `customer_order_details__element-order-table-sub-total-${index}`
            }
          >
            {product.price}

          </span>
          {' '}
          -
          <span
            data-testid={
              `customer_order_details__element-order-table-price-${index}`
            }
          >
            {(product.price * product.SalesProduct.quantity).toFixed(2).replace('.', ',')}

          </span>
          {' '}
          -
        </li>
      ))}
    </>
  );
}

ProductsOrderList.propTypes = {
  sale: PropTypes.arrayOf(PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    id: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    })),
    saleDate: PropTypes.string,
    seller: PropTypes.shape({ name: PropTypes.string }),
    sellerId: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    userId: PropTypes.number,
  })).isRequired,
};
