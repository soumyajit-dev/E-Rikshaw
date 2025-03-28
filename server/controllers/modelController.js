
const Config = require("../database/models/config");
const Emails = require("../database/models/email");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");
const Testimonial = require("../database/models/testimonials");
const User = require('../database/models/user');
const { getSuccessPayload, getErrorPayload } = require("../utilities/getSuccessAndErrorPayload");



const modelController = async (request, response, next) => {

  try {
    
    const successPayload = getSuccessPayload();
    await Products.sync({alter:true})
 
  



    response.send(successPayload);
  }
  catch (error) {
    const errorPayload = getErrorPayload();
    errorPayload.message = "error caught in model controller"
    errorPayload.extendedMessage = error.message
    response.send(errorPayload)
  }



}



module.exports = {
    modelController
}