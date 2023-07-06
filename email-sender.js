const nodemailer = require('nodemailer');

// Create a transporter object with your email service credentials
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'somethig@hotmail.com',
    pass: '************',
  },
});

// Create an email message
const mailOptions = {
  from: 'something@hotmail.com',
  to: 'someone@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Nodemailer!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred while sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
