import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts } from './redux/phoneBook/contacts-operations';
import {
  getContacts,
  getLoading,
  getError,
} from './redux/phoneBook/contacts-selectors';
import { getCurrentUser } from './redux/auth/auth-operations';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.onGetCurrentUser();
    // this.props.fetchContacts();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
  isLoadingContacts: getLoading(state),
  isError: getError(state),
});

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
  onGetCurrentUser: getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

{
  /* <RegisterPage />
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
        {this.props.isLoadingContacts && <h2>Loading...</h2>}
        {this.props.isError && <h2>Error, try again</h2>} */
}

// import RegisterPage from './pages/registerPages/RegisterPage';
// import ContactForm from './components/ContactForm/ContactForm';
// import ContactList from './components/ContactList/ContactList';
// import Filter from './components/Filter/Filter';
