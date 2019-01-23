// Send Emails with form data
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const admin = require('firebase-admin')

admin.initializeApp()

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

exports.sendEmail = functions.https.onRequest((req, res) => {
  const formData = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.telephone,
    message: req.body.message
  }

  const mailOptions = {
    subject: 'New contact from website',
    from: '"Live Design" <contatolivedesign@gmail.com>',
    to: 'contatolivedesign@gmail.com'
  }

  // Build Email message.
  mailOptions.html = `
  <h1>You have a new message!</h1>
  <p><b>Name: </b>${formData.name}</p>
  <p><b>Email: </b>${formData.email}</p>
  <p><b>Phone: </b>${formData.phone}</p>
  <p><b>Message: </b>${formData.message}</p>
  `
  mailOptions.text = `Name: ${formData.name}
  Email: ${formData.email}
  Phone: ${formData.phone}
  Message: ${formData.message}`

  return mailTransport
    .sendMail(mailOptions)
    .then(() => console.log('Email has been sent'))
    .then(() => res.redirect(303, 'https://livedesign.com.br/thanks.html'))
    .catch(error => {
      console.error('There was an error while sending the email:', error)
      res.status(500)
    })
})
