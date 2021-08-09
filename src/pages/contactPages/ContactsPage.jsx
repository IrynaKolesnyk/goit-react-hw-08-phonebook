import React, { Component } from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';
import { connect } from 'react-redux';
import {
  getContacts,
  getLoading,
} from '../../redux/phoneBook/contacts-selectors';
import { getErrorContacts } from '../../redux/error/error-selectors';
import { fetchContacts } from '../../redux/phoneBook/contacts-operations';
import ContactPageStyled from './ContactPageStyled';
import { error } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

class ContactsPage extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isError !== this.props.isError && this.props.isError) {
      error({
        text: this.props.isError,
        delay: 1000,
      });
      console.log(
        error({
          text: this.props.isError,
          delay: 1000,
        }),
      );
    }
  }

  render() {
    return (
      <ContactPageStyled className="phoneBook">
        <h2 className="contactTitle">Phonebook</h2>
        <ContactForm />
        <h2 className="contactListTitle">Contacts</h2>
        <Filter />
        <ContactList />
      </ContactPageStyled>
    );
  }
}
const mapStateToProps = state => ({
  contacts: getContacts(state),
  isLoadingContacts: getLoading(state),
  isError: getErrorContacts(state),
});

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
