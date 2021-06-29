import React from 'react';
import PropTypes from 'prop-types';

function InputText({ filters, setFilters }) {
  const handleChange = ({ target: { value } }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  };

  return (
    <label htmlFor="planet">
      Digite o nome de um Planet:
      <input
        id="planet"
        onChange={ handleChange }
        data-testid="name-filter"
      />
    </label>
  );
}

InputText.propTypes = {
  filters: PropTypes.objectOf(Object).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default InputText;
