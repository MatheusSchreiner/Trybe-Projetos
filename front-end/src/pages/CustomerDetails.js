import React from 'react';
import CostumerOrdersDetails from '../components/CostumerOrderDetails';
import Header from '../components/Header';
import { getStorage } from '../utils/localStorage';

export default function CostumerDetails() {
  return (
    <>
      <Header
        pageName="DETALHES DE PEDIDOS"
        yourOrder
        userName={ getStorage('user').name }
      />
      <CostumerOrdersDetails />
    </>
  );
}
