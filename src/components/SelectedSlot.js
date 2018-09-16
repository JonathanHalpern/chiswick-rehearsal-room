import React, { Component } from 'react';
import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const BookingDetails = styled.p`
  display: inline;
  background: white;
  padding: 3px;
  border-radius: 8px;
`;

class SelectedSlot extends Component {
  componentDidMount() {
    this.node.scrollIntoView();
  }

  render() {
    const { slot, onRemoveSlot, isProcessing } = this.props;
    return (
      <div>
        <div ref={node => (this.node = node)} />
        <BookingDetails className="booking-detail">
          {slot.bookingDate} from {slot.startTime} to {slot.endTime} : £{
            slot.price
          }
        </BookingDetails>
        {!isProcessing && (
          <IconButton
            aria-label="Delete"
            onClick={() => {
              onRemoveSlot(slot.key);
            }}>
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    );
  }
}

export default SelectedSlot;
