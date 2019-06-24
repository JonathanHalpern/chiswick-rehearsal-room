import sgMail from '@sendgrid/mail';

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = mailOptions => sgMail.send(mailOptions);

const hardCodedAlertEmail = 'jonnyhalpern@gmail.com';

const selectedSlotsTempate = selectedSlots =>
  selectedSlots
    .map(
      slot =>
        `<p>${slot.startTime} to ${slot.endTime} on ${slot.bookingDate}</p>`,
    )
    .join('');

export const bookingAlertEmailTemplate = ({
  name,
  selectedSlots,
  email,
  phoneNumber,
}) => ({
  from: 'no-reply@chiswickrehearsalroom.com',
  to: hardCodedAlertEmail,
  subject: `Someone booked the room`,
  text: 'Plaintext version of the message',
  html: `
  <div>
    <p>You have received a new booking from ${name}</p>
    ${selectedSlotsTempate(selectedSlots)}
    <p>If you need to contact them their details are:</p>
    <p>Email: ${email}</p>
    ${phoneNumber && `<p>Phone Number: ${phoneNumber}</p>`}
</div>`,
});

export const confirmationEmailTemplate = ({ name, selectedSlots, email }) => ({
  from: 'no-reply@chiswickrehearsalroom.com',
  to: email,
  subject: `Booking Confirmation for Chiswick Rehearsal Room`,
  text: 'Plaintext version of the message',
  html: `
  <div>
    <p>Hello ${name},</p>
    <p>Your booking details are:</p>
    ${selectedSlotsTempate(selectedSlots)}
    <p>Please get in touch if you have any questions</p>
    <p>Regards, Louise</p>
</div>`,
});

export const sendBookingAlertMail = details => {
  const mailOptions = bookingAlertEmailTemplate(details);
  return sendMail(mailOptions);
};

export const sendConfirmationMail = details => {
  const mailOptions = confirmationEmailTemplate(details);
  return sendMail(mailOptions);
};
