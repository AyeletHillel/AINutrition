const nodeMailer = require('nodemailer');
require('dotenv').config();
const password = process.env.EMAIL_PASSWORD;

const html = `<h1>Hi, I am a test email</h1>`;

const sendEmail = async () => {

    const transporter = nodeMailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 587,
        secure: false,
        auth: {
            user: 'cycleeats@yahoo.com',
            pass: password
        }
    });

    const info = await transporter.sendMail({
        from: 'CycleEats" <cycleeats@yahoo.com>',
        to: 'ayelethillel1@gmail.com',
        subject: 'Test email',
        html: html,


    })

    console.log('Message sent: ' + info.messageId);
}

sendEmail()
.catch(console.error);