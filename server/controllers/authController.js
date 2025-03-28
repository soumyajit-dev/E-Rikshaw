

const { authService } = require("../services/authService");
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const authController = async (request, response, next) => {

  try {
    const getAllDetails = await authService(request.body,response);
    const successPayload = getSuccessPayload();
    successPayload.responsePayload =getAllDetails;
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
  authController
}