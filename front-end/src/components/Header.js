import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import HeaderProducts from './HeaderProducts';
import HeaderADM from './HeaderADM';
import logo from '../images/logo.png';

export default function Header(props) {
  const { pageName, userName } = props;
  const { pathname } = useLocation();

  function logoutUser() {
    localStorage.clear();
  }
  function renderNav() {
    return (
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-center mb-2 mb-lg-0">
          <li className="nav-item align-self-center">
            { pathname.split('/').includes('seller') || pathname.split('/').includes('customer')
              ? <HeaderProducts className="navbar-brand" pageName={ pathname } />
              : <HeaderADM className="navbar-brand" pageName={ pageName } />}
          </li>
          <li className="nav-item align-self-center">
            <Link
              to="/login"
              data-testid="customer_products__element-navbar-link-logout"
              className="logoutPage"
              onClick={ () => logoutUser() }
            >
              SAIR
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <div className="container-fluid">
          <img
            src={ logo }
            alt=""
            width="38"
            height="40"
            className="d-inline-block align-text-top"
          />
          <span
            data-testid="customer_products__element-navbar-user-full-name"
            className="UserName navbar-brand"
          >
            {userName}
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {renderNav()}
        </div>

      </nav>
    </header>
  );
}

Header.propTypes = PropTypes.string.isRequired;
