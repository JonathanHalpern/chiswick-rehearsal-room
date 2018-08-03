import React from 'react';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { compose, withStateHandlers } from 'recompose';

const StlyedForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
`;

const TermsContainer = styled.div`
  width: 100%;
`;

const StyledButton = styled(Button)``;

const handlers = withStateHandlers(
  () => ({
    isDialogOpen: false,
  }),
  {
    toggleDialog: ({ isDialogOpen }) => () => ({
      isDialogOpen: !isDialogOpen,
    }),
  },
);

const BookingDetails = compose(handlers)(
  ({
    termsAndCondtionsHTML,
    hasAgreedTerms,
    updateTermAgreement,
    toggleDialog,
    isDialogOpen,
  }) => (
    <StlyedForm>
      <TermsContainer>
        <FormControlLabel
          control={
            <Checkbox
              checked={hasAgreedTerms}
              onChange={updateTermAgreement}
              value="Terms"
            />
          }
          label="I agree to the T&Cs"
        />
        <StyledButton onClick={toggleDialog}>Read T&Cs</StyledButton>
      </TermsContainer>
      <Dialog
        open={isDialogOpen}
        onClose={toggleDialog}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            dangerouslySetInnerHTML={{ __html: termsAndCondtionsHTML }}>
            {/* <div  /> */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </StlyedForm>
  ),
);

export default BookingDetails;
