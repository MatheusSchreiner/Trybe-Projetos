import React from 'react';

import InputTitle from './InputTitle';
import InputSubtitle from './InputSubtitle';
import InputImage from './InputImage';
import InputSinopse from './InputSinopse';
import InputRating from './InputRanting';
import InputGenre from './InputGenre';

class AddMovie extends React.Component {
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
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick } = this.props;
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;

    return (
      <form data-testid="add-movie-form">
        <InputTitle value={ title } onChange={ this.handleOnChange } />
        <InputSubtitle value={ subtitle } onChange={ this.handleOnChange } />
        <InputImage value={ imagePath } onChange={ this.handleOnChange } />
        <InputSinopse value={ storyline } onChange={ this.handleOnChange } />
        <InputRating value={ rating } onChange={ this.handleOnChange } />
        <InputGenre value={ genre } onChange={ this.handleOnChange } />
      </form>
    );
  }
}

export default AddMovie;
