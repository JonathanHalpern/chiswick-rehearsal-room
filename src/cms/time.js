import React, { Component } from 'react';

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
    const { time, forId } = this.state;
    return (
      <input
        type="time"
        id={forId}
        className="nc-controlPane-widget"
        name="appt-time"
        onChange={this.onChange}
        required
        value={time}
      />
    );
  }
}

// This is the preview component
export const TimePreview = ({ value }) => <div>{value}</div>;
