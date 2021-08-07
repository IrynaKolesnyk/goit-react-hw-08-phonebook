import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { connect } from 'react-redux';
import {
  getContacts,
  getError,
  getLoading,
} from '../../redux/phoneBook/contacts-selectors';
import { fetchContacts } from '../../redux/phoneBook/contacts-operations';

class ContactsPage extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div className="phoneBook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
