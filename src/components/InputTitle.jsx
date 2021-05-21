import React from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="titleId" data-testid="title-input-label">
        Título
        <input
          id="titleId"
          type="text"
          name="title"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
