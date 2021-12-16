import React from 'react';
import PropTypes from 'prop-types';

export default function ProductsOrderList({ sale }) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Qtd</th>
            <th scope="col">Valor Un.</th>
            <th scope="col">subTotal</th>
          </tr>
        </thead>
        <tbody>
          {sale[0] && sale[0].products.map((product, index) => (
            <tr key={ product.id }>
              <td>{product.name}</td>
              <td>{product.SalesProduct.quantity}</td>
              <td>{product.price}</td>
              <td>{(product.price * product.SalesProduct.quantity).toFixed(2).replace('.', ',')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
