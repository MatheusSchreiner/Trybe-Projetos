import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CostumerOrderInfo from './CustomerOrderInfo';
import CustomerOrderList from './CustomerOrderList';
import { getSale } from '../services/api';

export default function CostumerOrdersDetails() {
  const { pathname } = useLocation();
  const orderId = pathname.split('/')[3];
  const [sale, setSale] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    getSale(orderId)
      .then(({ data }) => {
        console.log(data);
        setSale(data);
      });
  }, [orderId, status]);
  return (
    <div>
      <CostumerOrderInfo sale={ sale } setStatus={ setStatus } />
      <CustomerOrderList sale={ sale } />
      <button
        type="button"
        disabled
        className="orderTotal btn btn-lg btn-dark"
      >
        Total:
        {sale[0] && sale[0].totalPrice.replace('.', ',')}
      </button>
    </div>
  );
}
