import React, { useContext } from 'react';

import { starwarsContext } from '../context/StarwarsProvider';
import InputText from '../components/InputText';

function FormSearch() {
  const { filters, setFilters } = useContext(starwarsContext);

  return (
    <form>
      <InputText filters={ filters } setFilters={ setFilters } />
    </form>
  );
}

export default FormSearch;
