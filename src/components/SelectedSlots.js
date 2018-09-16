import React from 'react';
import styled from 'styled-components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SelectedSlot from './SelectedSlot';

const SelectedSlotsTitle = styled.p`
  margin: 0;
`;

const TotalPrice = styled.p`
  margin: 0;
`;

const Container = styled.div`
  .example-enter {
    .booking-detail{
      opacity: 0;
      background: white;
    }
  }

  .example-enter.example-enter-active {
    .booking-detail{
       opacity: 1;
       background: #ffb8d1;
        transition: background 400ms ease-in;
        transition: opacity: 400ms ease-in;
      }
    }

  .example-leave {
    .booking-detail{
      opacity: 1;
    }
  }

  .example-leave.example-leave-active {
    .booking-detail{
      opacity: 0.01;
      transition: opacity 200ms ease-in;
    }
  }
`;

const SelectedSlots = ({ slots, onRemoveSlot, totalPrice, isProcessing }) => (
  <Container>
    {slots.length > 0 && <SelectedSlotsTitle>Your slots:</SelectedSlotsTitle>}
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={200}>
      {slots.map(slot => (
        <SelectedSlot
          slot={slot}
          onRemoveSlot={onRemoveSlot}
          key={slot.key}
          isProcessing={isProcessing}
        />
      ))}
    </ReactCSSTransitionGroup>
    {slots.length > 0 && <TotalPrice>Total: £{totalPrice}</TotalPrice>}
  </Container>
);

export default SelectedSlots;
