import React from 'react';
import PropTypes from 'prop-types';

export default class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="avaliacao" data-testid="rating-input-label">
        Avaliação
        <input
          id="avaliacao"
          type="number"
          name="rating"
          value={ value }
          onChange={ onChange }
          data-testid="rating-input"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
