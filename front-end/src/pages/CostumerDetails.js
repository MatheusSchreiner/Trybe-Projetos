import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import { getSale } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function CostumerDetails() {
  const { pathname } = useLocation();
  const orderId = pathname.split('/')[3];

  useEffect(() => {
    getSale(orderId)
      .then(({ data }) => {
        console.log(data);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // header
    // detalhes do pedido
  // infomações do pedido
  // lista de produtos
  // valor total
    // <Header
    //   pageName="DETALHES DE PEDIDOS"
    //   yourOrder
    //   userName={ getStorage('user').name }
    // />
    <p>oi</p>
  );
}
