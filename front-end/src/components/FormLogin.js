import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../services/api';
import { createStorage, getStorage } from '../utils/localStorage';
import loginLogo from '../images/login.png';

export default function FormLogin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(false);

  const verifyLogin = () => getStorage('user') && history.push('/customer/products');
  verifyLogin();

  const PassLength = 6;
  const threeSecond = 3000;

  async function submit(e) {
    e.preventDefault();
    const userId = await login({ email, password: pass });
    console.log(userId);
    if (userId.message) {
      setErr(true);
      return setTimeout(() => setErr(false), threeSecond);
    }
    const { data: [user] } = userId;
    createStorage('user', userId.data[0]);
    if (user.role === 'administrator') {
      return history.push('/admin/manage');
    } if (user.role === 'seller') {
      return history.push('/seller/orders');
    }
    if (user.role === 'customer') {
      return history.push('/customer/products');
    }
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
            <span className="input-group-text" id="inputGroup-sizing-sm">E-mail</span>
            <label htmlFor="email">
              <input
                className="form-control"
                id="email"
                value={ email }
                data-testid="common_login__input-email"
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
                type="password"
                value={ pass }
                data-testid="common_login__input-password"
                onChange={ ({ target }) => setPass(target.value) }
              />
            </label>
          </div>
          <div className="login">
            <button
              className="btn btn-danger btn-lg"
              disabled={ !(/[a-z0-9]+@[a-z0-9]+\.[a-z0-9]{2,3}(\.[a-z0-9]+)?$/.test(email))
            || pass.length < PassLength }
              type="submit"
              data-testid="common_login__button-login"
            >
              Login
            </button>
            { err && (
              <p
                className="message-error"
                data-testid="common_login__element-invalid-email"
              >
                Login ou senha invalidos

              </p>) }
            <br />
            <button
              type="button"
              data-testid="common_login__button-register"
              className="btn btn-link"
            >
              <Link to="/register">
                Registrar
              </Link>
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}
