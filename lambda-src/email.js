import sgMail from '@sendgrid/mail';

require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = mailOptions => sgMail.send(mailOptions);

export const bookingAlertEmailTemplate = ({
  name,
  startTime,
  endTime,
  bookingDate,
  email,
  phoneNumber,
  bookingAlertEmail,
}) => ({
  from: 'no-reply@chiswickrehearsalroom.com',
  to: bookingAlertEmail,
  subject: `Someone booked the room`,
  text: 'Plaintext version of the message',
  html: `
  <div>
    <p>You have received a new booking from ${name}</p>
    <p>${startTime} to ${endTime} on ${bookingDate}</p>
    <p>If you need to contact them their details are:</p>
    <p>Email: ${email}</p>
    ${phoneNumber && `<p>Phone Number: ${phoneNumber}</p>`}
</div>`,
});

export const confirmationEmailTemplate = ({
  name,
  startTime,
  endTime,
  bookingDate,
  email,
}) => ({
  from: 'no-reply@chiswickrehearsalroom.com',
  to: email,
  subject: `Booking Confirmation for Chiswick Rehearsal Room`,
  text: 'Plaintext version of the message',
  html: `
  <div>
    <p>Hello ${name},</p>
    <p>Your booking details are:</p>
    <p>${startTime} to ${endTime} on ${bookingDate}</p>
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
