const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ultimaxx@hotmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app ${name}. How do you get along?`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'ultimaxx@hotmail.com',
    subject: `We're sorry you're leaving`,
    text: `Goodbye ${name}. Is there anything we could have to keep you around?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}
