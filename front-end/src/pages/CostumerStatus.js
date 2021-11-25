import React, { useState, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const Orders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };
    Orders();
  }, []);

  return (
    <div>
      { redirect && <Redirect to={ `/customer/orders/${orderId}` } /> }
      <Header
        pageName="LISTA DE PEDIDOS"
        yourOrder="MEUS PEDIDOS"
        userName={ getStorage('user').name }
      />

      {orders.length && orders.map(({ id, status, saleData, totalPrice }) => (
        <button
          type="button"
          onClick={ () => { setOrderId(id); setRedirect(true); } }
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
