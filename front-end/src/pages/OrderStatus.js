import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState('');

  useEffect(() => getOrders().then(({ data }) => {
    setOrders(data);
  }), []);

  const getRedirect = async (id) => (<Redirect to={ `/customer/orders/${id}` } />);

  return (
    <div>
      { redirect !== '' && getRedirect(redirect) }
      <Header
        pageName="LISTA DE PEDIDOS"
        yourOrder="MEUS PEDIDOS"
        userName={ getStorage('user').name }
      />

      {orders.length && orders.map(({ id, status, saleData, totalPrice }) => (
        <button
          type="button"
          onClick={ () => { setRedirect(id); } }
          key={ id }
        >
          <span
            data-testid={ `customer_products__card-orderId-${id}` }
          >
            {id}
          </span>
          <span
            data-testid={ `customer_products__card-deliveryStatus-${id}` }
          >
            {status}
          </span>
          <span
            data-testid={ `customer_products__element-order-date-${id}` }
          >
            {saleData}
          </span>
          <span
            data-testid={ `customer_products__card-price-${id}` }
          >
            {totalPrice}
          </span>
        </button>
      ))}
    </div>
  );
}
