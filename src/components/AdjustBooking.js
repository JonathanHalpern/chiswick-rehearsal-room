import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AdjustBooking = ({
  toggleDialog,
  isDialogOpen,
  slotToEdit,
  deleteBooking,
  confirmChanges,
}) => (
  <Dialog
    open={isDialogOpen}
    onClose={toggleDialog}
    aria-labelledby="responsive-dialog-title">
    <DialogTitle id="responsive-dialog-title">{slotToEdit.name}</DialogTitle>
    <DialogContent>
      <DialogContentText>{slotToEdit.startTime}</DialogContentText>
      <DialogContentText>{slotToEdit.endTime}</DialogContentText>
      <DialogContentText>{slotToEdit.bookingDate}</DialogContentText>
      <Button onClick={toggleDialog}>Cancel changes</Button>
      <Button onClick={confirmChanges}>Confirm changes</Button>
      <Button onClick={deleteBooking}>Delete booking</Button>
    </DialogContent>
  </Dialog>
);

export default AdjustBooking;
