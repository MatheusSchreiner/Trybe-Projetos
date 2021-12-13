import React from 'react';
import PropTypes from 'prop-types';

export default class InputGenre extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="genreId" data-testid="genre-input-label">
        Gênero
        <select
          id="genreId"
          name="genre"
          value={ value }
          onChange={ onChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
