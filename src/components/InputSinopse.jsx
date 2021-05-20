import React from 'react';
import PropTypes from 'prop-types';

export default class InputSinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="40"
          rows="20"
          id="sinopse"
          name="storyline"
          value={ value }
          onChange={ onChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

InputSinopse.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
