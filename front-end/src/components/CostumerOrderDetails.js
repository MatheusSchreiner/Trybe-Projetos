import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import OrderInfo from './OrderInfo';
import OrderList from './OrderList';
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
      <OrderInfo sale={ sale } />
      {/* <OrderList sale={ sale } /> */}
    </div>
  );
}
