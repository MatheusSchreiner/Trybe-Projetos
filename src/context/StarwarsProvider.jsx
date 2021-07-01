import React, { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

import starwarsAPI from '../services/StarwarsAPI';

const starwarsContext = createContext();

function StarwarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  });

  useEffect(() => {
    async function resultAPI() {
      const { results } = await starwarsAPI();
      results.map((obj) => delete obj.residents);
      setData(results);
      setLoading(false);
    }
    resultAPI();
  }, []);

  const store = {
    loading,
    data,
    filters,
    setFilters,
  };

  return (
    <starwarsContext.Provider value={ store }>
      { children }
    </starwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { starwarsContext, StarwarsProvider };
