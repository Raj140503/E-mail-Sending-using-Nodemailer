const nodemailer = require('nodemailer');

const EMAIL_USER = 'rajpatil14052003@gmail.com';
const EMAIL_PASSWORD = 'APP_Password';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

const mailOptions = {
    from: 'rajpatil14052003@gmail.com',
    to: 'rajpatil14052003@gmail.com',
    subject: 'Halchal',
    text: 'Hey, How are you?.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
