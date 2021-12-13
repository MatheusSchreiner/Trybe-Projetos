import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  total(expenses) {
    const total = expenses.reduce((acc, curr) => {
      const rate = curr.exchangeRates[curr.currency].ask;
      return acc + curr.value * rate;
    }, 0);
    return total;
  }

  render() {
    const { email, expenses } = this.props;

    return (
      <header>
        <span data-testid="email-field">{email}</span>
        <span data-testid="total-field">{ this.total(expenses) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
