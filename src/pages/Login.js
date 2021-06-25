import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { actionEnterLogin } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: '',
      userPassword: '',
      login: true,
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveAndRedirect = this.saveAndRedirect.bind(this);
  }

  saveAndRedirect(email, password) {
    const { addUser } = this.props;
    addUser(email, password);
    this.setState({
      redirect: true,
    });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.validation(this.state);
    });
  }

  validation({ userEmail, userPassword }) {
    const regex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    const Email = regex.test(userEmail);
    const minNumber = 6;

    if (Email && userPassword.length >= minNumber) {
      this.setState({
        login: false,
      });
    } else {
      this.setState({
        login: true,
      });
    }
  }

  render() {
    const { login, userEmail, userPassword, redirect } = this.state;
    if (redirect) return <Redirect to="/carteira" />;

    return (
      <section>
        <form>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              name="userEmail"
              placeholder="Insira seu e-mail"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label htmlFor="senha">
            Senha:
            <input
              id="senha"
              type="password"
              name="userPassword"
              placeholder="Insira sua senha"
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
          <button
            type="button"
            disabled={ login }
            onClick={ () => this.saveAndRedirect(userEmail, userPassword) }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addUser: (email, password) => dispatch(
    actionEnterLogin(email, password),
  ),
});

export default connect(null, mapDispatchToProps)(Login);
