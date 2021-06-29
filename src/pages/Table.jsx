import React, { useContext } from 'react';

import { starwarsContext } from '../context/StarwarsProvider';
import Thead from '../components/Thead';
import Tbody from '../components/Tbody';

export default function Table() {
  const { data, loading } = useContext(starwarsContext);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table>
      <Thead data={ data } />
      <Tbody />
    </table>
  );
}
