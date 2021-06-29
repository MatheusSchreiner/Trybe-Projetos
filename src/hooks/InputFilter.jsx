import { useContext, useEffect, useState } from 'react';
import { starwarsContext } from '../context/StarwarsProvider';

function InputFilter() {
  const { data, filters } = useContext(starwarsContext);
  const { name } = filters.filterByName;
  const [dataFiltred, setDataFiltred] = useState(data);

  useEffect(() => {
    if (name) {
      setDataFiltred(data.filter((planet) => planet.name.includes(name)));
    } else {
      setDataFiltred(data);
    }
  }, [data, name]);

  return dataFiltred;
}

export default InputFilter;
