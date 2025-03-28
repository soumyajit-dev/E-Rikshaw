



require('dotenv').config();



async function sendMobileMessage(createdQuery){


    const accountSid = process.env.TWILIOACOUNTSID;
    const authToken = process.env.TWILIOAUTHTOKEN;
    const client = require('twilio')(accountSid, authToken);
    const templateString = "Someone just raised a query:"+createdQuery.queryMessage+
    " for a product please reachout to "+createdQuery.queryPhone+
    "or"+createdQuery.queryEmail;
    
    try{
       
     await   client.messages
    .create({
        body: templateString,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917003420196'
    })
    // .then(message => console.log(message.sid))
    // .done();

    }
    catch(error){
        throw ({ errorMessage: "error caught in service level", message: error.message });
    }

}

module.exports={sendMobileMessage}