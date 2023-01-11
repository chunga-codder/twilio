const express = require('express');
const app = express();
require ('dotenv')
// const PORT = 3000;

// let PORT;
// process.env.STATUS === 'production'
// ? (PORT = process.env.PROD_PORT)
// : (PORT = process.env.DEV_PORT);

// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC3cdb13eacf748d28f594af38ab00f60a";
const authToken = "36951f534c79b0e175b49a74a8aa8f78"
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({ body: "Hello from Testing", from: "+17262001302", to: "+237672446566" })
  .then(message => console.log('success', message.sid));

    //   app.listen(PORT, (res,err)=>{
    //     console.log(`server in ${process.env.STATUS} mode, listening on: ${PORT}`)
    //   });

