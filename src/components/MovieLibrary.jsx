import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleAllChange = this.handleAllChange.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  handleAllChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  filterMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return movies.filter((movie) => {
      if (bookmarkedOnly) return movie.bookmarked;

      if (selectedGenre) return movie.genre === selectedGenre;

      if (!searchText) return movie;

      const search = searchText.toLowerCase();
      const title = movie.title.toLowerCase();
      const subtitle = movie.subtitle.toLowerCase();
      const storyline = movie.storyline.toLowerCase();

      return (title.includes(search)
        || subtitle.includes(search)
        || storyline.includes(search));
    });
  }

  addMovie(state) {
    const { movies } = this.state;

    this.setState({
      movies: [...movies, state],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const movie = this.filterMovies();

    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleAllChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleAllChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleAllChange }
        />
        <MovieList movies={ movie } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};
