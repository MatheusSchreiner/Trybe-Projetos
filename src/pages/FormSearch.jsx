import React, { useContext } from 'react';

import { starwarsContext } from '../context/StarwarsProvider';
import InputText from '../components/InputText';
import Select from '../components/Select';

function FormSearch() {
  const { data, filters, setFilters } = useContext(starwarsContext);

  return (
    <form>
      <InputText filters={ filters } setFilters={ setFilters } />
      <Select data={ data } filters={ filters } setFilters={ setFilters } />
    </form>
  );
}

export default FormSearch;
