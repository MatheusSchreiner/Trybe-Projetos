import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CostumerOrderInfo from './CustomerOrderInfo';
import CustomerOrderList from './CustomerOrderList';
import { getSale } from '../services/api';

export default function CostumerOrdersDetails() {
  const { pathname } = useLocation();
  const orderId = pathname.split('/')[3];
  const [sale, setSale] = useState([]);

  useEffect(() => {
    console.log(orderId);
    getSale(orderId)
      .then(({ data }) => {
        console.log(data);
        setSale(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <CostumerOrderInfo sale={ sale } />
      <CustomerOrderList sale={ sale } />
      <h2 data-testid="customer_order_details__element-order-total-price">
        {sale[0] && sale[0].totalPrice.replace('.', ',')}
      </h2>
    </div>
  );
}
