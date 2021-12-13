import React from 'react';
import PropTypes from 'prop-types';

export default class InputImage extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="imageId" data-testid="image-input-label">
        Imagem
        <input
          id="imageId"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          data-testid="image-input"
        />
      </label>
    );
  }
}

InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
