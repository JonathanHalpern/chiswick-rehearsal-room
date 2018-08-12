import React, { Component } from 'react';
import Moment from 'moment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import styled from 'styled-components';
import AdjustBookingForm from '../components/AdjustBookingForm';

const StyledButton = styled(Button)`
  margin-right: 5px !important;
`;

class AdjustBooking extends Component {
  constructor(props) {
    super(props);
    const {
      name,
      email,
      phoneNumber,
      startTime,
      endTime,
      bookingDate,
      bookingId,
    } = this.props;
    this.state = {
      name,
      email,
      phoneNumber,
      startTime,
      endTime,
      bookingDate: Moment(bookingDate, 'DD/MM/YYYY').format('YYYY-MM-DD'),
      bookingId,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onConfirm() {
    const { toggleDialog, onConfirm } = this.props;
    const { bookingDate, ...otherDetails } = this.state;
    onConfirm({
      ...otherDetails,
      bookingDate: Moment(bookingDate).format('DD/MM/YYYY'),
    });
    toggleDialog();
  }

  onDelete() {
    const { toggleDialog, onDelete, bookingId } = this.props;
    onDelete(bookingId);
    toggleDialog();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { toggleDialog } = this.props;
    const { name } = this.state;
    return (
      <Dialog
        open
        onClose={toggleDialog}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <AdjustBookingForm {...this.state} handleChange={this.handleChange} />
          <StyledButton variant="outlined" onClick={toggleDialog}>
            Cancel
          </StyledButton>
          <StyledButton
            color="primary"
            variant="outlined"
            onClick={this.onConfirm}>
            Confirm
          </StyledButton>
          <StyledButton
            color="secondary"
            variant="outlined"
            onClick={this.onDelete}>
            Delete
          </StyledButton>
        </DialogContent>
      </Dialog>
    );
  }
}

export default AdjustBooking;
