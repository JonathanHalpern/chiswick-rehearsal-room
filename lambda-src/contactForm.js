import sgMail from '@sendgrid/mail';

const emailTo = 'jonnyhalpern@gmail.com';

export function handler(event, context, callback) {
  const data = event.body;
  const { to, from, name, message, phoneNumber } = JSON.parse(data);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  console.log(from, name, message, emailTo);

  const msg = {
    to,
    from,
    subject: `Message from: ${name}`,
    text: message,
    html: `
      <div>
        <p>New Message from ${name},</p>
        ${phoneNumber && `<p>Phone Number: ${phoneNumber}</p>`}
        <br />
        <p>${message}</p>
    </div>`,
  };
  sgMail
    .send(msg)
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({ message: 'sent' }),
      });
    })
    .catch(error => {
      console.log('The email could not be sent');
      console.log(error);
      callback(null, {
        statusCode: 404,
        body: JSON.stringify({
          errorMessage:
            'Your email could not be sent. Try emailing directly, using the address above',
        }),
      });
    });
}
