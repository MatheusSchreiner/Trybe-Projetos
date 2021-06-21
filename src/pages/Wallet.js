import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    return <div>TrybeWallet</div>;
  }
}

Wallet.propTypes = {

};

const mapStateToProps = () => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
