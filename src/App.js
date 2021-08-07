import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operations';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import { getErrorAuth } from './redux/auth/auth-selectors';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <Header />
        <Main />
        {this.props.isError && <h2>Error, try again</h2>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isError: getErrorAuth(state),
});

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
