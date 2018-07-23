import React, { Component } from 'react';
import styled from 'styled-components';

// This is the editing component
export class TimeControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.value,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const { onChange } = this.props;
    const newTime = event.target.value;
    this.setState({
      time: newTime,
    });
    onChange(newTime);
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <input
          type="time"
          id="appt-time"
          name="appt-time"
          min="9:00"
          max="18:00"
          onChange={this.onChange}
          required
          value={time}
        />
      </div>
    );
  }
}

// This is the preview component
export const TimePreview = ({ value }) => <div>{value}</div>;
