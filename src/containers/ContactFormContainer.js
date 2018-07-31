import React, { Component } from 'react';

import ContactDetails from '../components/ContactDetails';

const { API } = process.env;

console.log(process.env);

class ContactFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'bob',
      email: 'ad',
      phoneNumber: '',
      message: 'sd',
      errorMessage: '',
      isSending: false,
      isSent: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const { name, email, phoneNumber, message } = this.state;
    const { contactEmail } = this.props;
    this.setState({
      isSubmitting: true,
    });
    fetch(`${API}/contactForm`, {
      method: 'post',
      body: JSON.stringify({
        name,
        to: contactEmail,
        from: email,
        phoneNumber,
        message,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        this.setState({
          isSubmitting: false,
          isSent: true,
        });
      })
      .catch(err => {
        err.text().then(errorObject => {
          const { errorMessage } = JSON.parse(errorObject);
          this.setState({
            isSubmitting: false,
            errorMessage,
          });
        });
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { isSent, isSubmitting, errorMessage, ...values } = this.state;
    const { onEmailSendMessage } = this.props;
    return (
      <div>
        {isSent ? (
          <p>{onEmailSendMessage}</p>
        ) : (
          <ContactDetails
            {...values}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
            isSubmitting={isSubmitting}
          />
        )}
        <p>{errorMessage}</p>
      </div>
    );
  }
}

export default ContactFormContainer;
