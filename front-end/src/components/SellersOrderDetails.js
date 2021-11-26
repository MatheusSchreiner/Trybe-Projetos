import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import SellersOrderInfo from './SellersOrderInfo';
import SellersOrderList from './SellersOrderList';
import { getSale } from '../services/api';

export default function SellersOrdersDetails() {
  // Importa o pathname da url
  const { pathname } = useLocation();
  // Retira da url o id da venda
  const orderId = pathname.split('/')[3];
  // Cria o estado para a venda
  const [sale, setSale] = useState([]);
  // Faz apenas 1 requisição assim que o componente é renderizado
  useEffect(() => {
    getSale(orderId)
      .then(({ data }) => {
        setSale(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <SellersOrderInfo sale={ sale } setSale={ setSale } />
      <SellersOrderList sale={ sale } />
      <h2 data-testid="seller_order_details__element-order-total-price">
        {/* Para evitar que quebre após primeira renderização */}
        {sale[0] && sale[0].totalPrice.replace('.', ',')}
      </h2>
    </div>
  );
}
