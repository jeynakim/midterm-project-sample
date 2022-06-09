const accountSid = 'AC3207fceb06028f25b2d0977dbece3091';
const authToken = '05bd8f7a63160926279dc3b17ed149ab';
const twilioPhone = '+19108386143';
const recipient = '+16475807372';

const client = require('twilio')(accountSid, authToken);

function sendClientConfirmation() {
  return client.messages.create({
    body: `Hello, Thanks for ordering with Bite Me Burger. Your order has been confirmed.`,
    from: twilioPhone,
    to: recipient
  })
}


function sendAdminOrder() {
  return client.messages.create({
    body: `You have a new order for Bite Me Burger. Please login to view the order`,
    from: twilioPhone,
    to: recipient
  })
}

function updateClientTime() {
  return client.messages.create({
    body: `Your order will be ready for pickup in ${}`,
    from: twilioPhone,
    to: recipient
  })
}


module.exports = { sendClientConfirmation, sendAdminOrder };
