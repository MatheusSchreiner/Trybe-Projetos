import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { register } from '../services/api';
import { createStorage } from '../utils/localStorage';
import loginLogo from '../images/login.png';

export default function FormRegister() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(false);

  const PassLength = 6;
  const NameLength = 12;
  const threeSecond = 3000;

  async function submit(e) {
    e.preventDefault();
    const user = await register({ name, email, password: pass });
    if (user.message) {
      setErr(true);
      return setTimeout(() => setErr(false), threeSecond);
    }
    createStorage('user', user.data[0]);
    history.push('/customer/products');
  }

  return (
    <div className="container">
      <form onSubmit={ (e) => submit(e) }>
        <img
          src={ loginLogo }
          alt=""
          width="300"
          height="250"
          className="d-inline-block align-text-top"
        />
        <div className="form-group">
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Nome</span>
            <label htmlFor="name">
              <input
                className="form-control"
                id="name"
                value={ name }
                data-testid="common_register__input-name"
                onChange={ ({ target }) => setName(target.value) }
              />
            </label>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
            <label htmlFor="email">
              <input
                className="form-control"
                id="email"
                value={ email }
                data-testid="common_register__input-email"
                onChange={ ({ target }) => setEmail(target.value) }
              />
            </label>
          </div>
          <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">Senha</span>
            <label htmlFor="password">
              <input
                className="form-control"
                id="password"
                value={ pass }
                data-testid="common_register__input-password"
                onChange={ ({ target }) => setPass(target.value) }
              />
            </label>
          </div>
          <div className="login">
            <button
              className="btn btn-danger btn-lg"
              type="submit"
              data-testid="common_register__button-register"
              disabled={ !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))
          || pass.length < PassLength
          || name.length < NameLength }
            >
              Cadastro
            </button>
            { err && (
              <p
                className="message-error"
                data-testid="common_register__element-invalid_register"
              >
                Login já é cadastrado

              </p>) }
          </div>
        </div>
      </form>
    </div>

  );
}
