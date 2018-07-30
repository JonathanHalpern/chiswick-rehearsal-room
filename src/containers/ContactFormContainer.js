import React, { Component } from 'react';

import ContactDetails from '../components/ContactDetails';

const { API } = process.env;

class ContactFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bob',
      email: 'ad',
      phoneNumber: '',
      message: 'sd',
      isSending: false,
      isSent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { name, email, phoneNumber, message } = this.state;
    this.setState({
      isSubmitting: true,
    });
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
        // if (!response.ok) {
        //   throw response;
        // }
        this.setState({
          isSubmitting: false,
          isSent: true,
        });
        // handleChange('isSent', true);
        console.log(response);
      })
      .catch(error => {
        this.setState({
          isSubmitting: false,
        });
        console.log('error');
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { isSent, isSubmitting, ...values } = this.state;
    return (
      <div>
        {isSent ? (
          <p>Done</p>
        ) : (
          <ContactDetails
            {...values}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      </div>
    );
  }
}

export default ContactFormContainer;
