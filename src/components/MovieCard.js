import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie: { id, title, storyline, imagePath } } = this.props;

    return (
      <div data-testid="movie-card">
        Movie Card
        <article>
          <img src={ imagePath } alt={ title } />
          <h3>{ title }</h3>
          <p>{ storyline }</p>
          <Link to={ `/movies/${id}` }>VER DETALHES</Link>
        </article>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
