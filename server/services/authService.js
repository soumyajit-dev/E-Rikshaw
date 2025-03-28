const Joi = require('joi');
var jwt = require('jsonwebtoken');
const { findUser } = require('../Repository/homeRepository');


const authService = async (request,response)=>{
    const responseBody={}

  
    try{
        

        const userSchema = getUserSchema();
        await userSchema.validateAsync(request);

        const user = await findUser(request);
        if(user){
            responseBody.jwtToken = jwt.sign({
                exp: Math.floor(Date.now() / 1000) + (60 * 60),
                userID: request.userID },'shhhh');
                return responseBody;
        }
        else{
            throw ({errorMessage:"error caught in auth service level", message:"user not found"});
        }
   
    }
    catch(error){
      
        throw ({errorMessage:"error caught in auth service level", message:error.message});
   
    }

}


function getUserSchema(){
    return Joi.object({
        userID: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } })
    })
}




module.exports={
    authService
}