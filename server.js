require("dotenv").config()
const nodemailer = require('nodemailer');
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSWORD
    }
});
  
let mailDetails = {
    from: process.env.USERMAIL,
    to: 'shariq.khan@chainsense.com,shantanu.otari@chainsense.com',
    subject: 'Test mail',
    text: 'Node.js testing mail'
};
  
mailTransporter.sendMail(mailDetails, function(err, data) {
    if(err) {
        console.log(err);
        console.log('Error Occurs');
    } else {
        console.log(data)
        console.log('Email sent successfully');
    }
});