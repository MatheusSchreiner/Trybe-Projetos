import React from 'react';
import Header from '../components/Header';
import FormAdmin from '../components/FormAdmin';
import { getStorage } from '../utils/localStorage';

export default function Admin() {
  return (
    <>
      <Header
        pageName="GERENCIAR USUARIOS"
        yourOrder={ false }
        userName={ getStorage('user') && getStorage('user').name }
      />
      <FormAdmin />
    </>
  );
}