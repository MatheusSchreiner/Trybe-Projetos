import React from 'react';

import WalletHeader from '../components/WalletHeader';
import NewExpense from '../components/NewExpense';
import Expense from '../components/Expense';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <WalletHeader />
        <Expense />
        <NewExpense />
      </div>
    );
  }
}

export default Wallet;
