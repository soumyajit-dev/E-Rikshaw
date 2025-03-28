
const { homeService, configService } = require("../services/homeService");
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const homeController = async (request, response, next) => {

  try {
    const getAllDetails = await homeService();
    const successPayload = getSuccessPayload();

    successPayload.responsePayload = {
      homeDetails: getAllDetails
    };


    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = error.errorMessage
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }



}

const configController = async (request, response, next) => {

  try {
    
    const getAllDetails = await configService(request.body);
    const successPayload = getSuccessPayload();

    successPayload.responsePayload = getAllDetails

    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = error.errorMessage
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }



}



module.exports = {
  homeController,configController
}