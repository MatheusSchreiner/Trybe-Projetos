import React from 'react';
import PropTypes from 'prop-types';

export default class InputSinopse extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="sinopseId" data-testid="storyline-input-label">
        Sinopse
        <textarea
          cols="20"
          rows="15"
          id="sinopseId"
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
