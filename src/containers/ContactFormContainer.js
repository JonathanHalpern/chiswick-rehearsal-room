import React from 'react';
import { compose, withStateHandlers } from 'recompose';

import ContactDetails from '../components/ContactDetails';

const { API } = process.env;

const handlers = withStateHandlers(
  () => ({
    name: 'bob',
    email: 'ad',
    phoneNumber: '',
    message: 'sd',
  }),
  {
    handleChange: () => (name, value) => {
      return {
        [name]: value,
      };
    },
    onSubmit: ({ name, email, phoneNumber, message }) => () => {
      fetch(`${API}/contactForm`, {
        method: 'post',
        body: JSON.stringify({
          name,
          from: email,
          phoneNumber,
          message,
        }),
      })
        .then(response => response.json())
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log('error');
        });
    },
  },
);

const ContactFormContainer = compose(handlers)(
  ({ handleChange, onSubmit, ...values }) => (
    <ContactDetails
      {...values}
      handleChange={name => event => handleChange(name, event.target.value)}
      // onSubmit={onSubmit}
      // onSubmit={() => onSubmit()}
      onSubmit={onSubmit}
    />
  ),
);

export default ContactFormContainer;
