import React from 'react';
import SellersOrdersDetails from '../components/SellersOrderDetails';
import Header from '../components/Header';
import { getStorage } from '../utils/localStorage';

export default function SellersDetails() {
  return (
    <>
      <Header
        pageName="DETALHES DE PEDIDOS"
        yourOrder={ false }
        userName={ getStorage('user').name }
      />
      <SellersOrdersDetails />
    </>
  );
}
