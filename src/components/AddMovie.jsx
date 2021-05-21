import React from 'react';
import PropTypes from 'prop-types';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputSinopse from './InputSinopse';
import InputRating from './InputRanting';
import InputGenre from './InputGenre';

export default class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  resetState() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <div>
        <form data-testid="add-movie-form">
          <InputTitle value={ title } onChange={ this.handleOnChange } />
          <InputSubtitle value={ subtitle } onChange={ this.handleOnChange } />
          <InputImage value={ imagePath } onChange={ this.handleOnChange } />
          <InputSinopse value={ storyline } onChange={ this.handleOnChange } />
          <InputRating value={ Number(rating) } onChange={ this.handleOnChange } />
          <InputGenre value={ genre } onChange={ this.handleOnChange } />
        </form>
        <button
          type="submit"
          onClick={ this.resetState }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
