import React from 'react';
import PropTypes from 'prop-types';

function Thead({ data }) {
  const keysData = Object.keys(data[0]);

  return (
    <thead>
      <tr>
        {keysData.map((key, index) => <th key={ index }>{key}</th>)}
      </tr>
    </thead>
  );
}

Thead.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default Thead;
