import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

function StarwarsProvider({ children }) {
  const store = {};
  return (
    <Context.Provider value={ store }>
      { children }
    </Context.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarwarsProvider;
