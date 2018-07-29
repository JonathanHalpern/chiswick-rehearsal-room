// ./src/containers/Poll.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PollsContainer extends Component {
  static contextTypes = {
    firebase: PropTypes.object,
  };

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    signIn: PropTypes.func.isRequired,
  };

  state = {
    loading: false,
    bookings: [],
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.bookings.get().then(querySnapshot => {
      this.setState({
        bookings: querySnapshot.docs.map(doc => doc.data()),
        loading: false,
      });
    });
  }

  get bookings() {
    const { firebase } = this.context;
    return firebase.bookings;
  }

  render() {
    const { bookings, loading } = this.state;
    return (
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          bookings.map(poll => {
            console.log(poll);
          })
        )}
      </div>
    );
  }
}

export default PollsContainer;
