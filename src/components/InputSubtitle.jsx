import React from 'react';
import ProTypes from 'prop-types';

export default class InputSubtitle extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="subtitleId" data-testid="subtitle-input-label">
        Subtítulo
        <input
          id="subtitleId"
          type="text"
          name="subtitle"
          value={ value }
          onChange={ onChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: ProTypes.string.isRequired,
  onChange: ProTypes.func.isRequired,
};
