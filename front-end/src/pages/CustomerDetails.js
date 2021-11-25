import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import CostumerOrdersDetails from '../components/CostumerOrderDetails';
import Header from '../components/Header';
import { getStorage } from '../utils/localStorage';

export default function CostumerDetails() {
  const { pathname } = useLocation();
  const orderId = pathname.split('/')[3];
  const [sale, setSale] = useState([]);

  // useEffect(() => {
  //   getSale(orderId)
  //     .then(({ data }) => {
  //       console.log(data);
  //       setSale(data);
  //     });
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <>
      <Header
        pageName="DETALHES DE PEDIDOS"
        yourOrder
        userName={ getStorage('user').name }
      />
      <CostumerOrdersDetails sale={ sale } />
    </>
  );
}
