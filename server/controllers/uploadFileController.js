

const ProductsPictures = require('../database/models/productPics');
const {uploadOnCloudinary}= require('../external/cloudinary');
const { getSuccessPayload, getErrorPayload } = require('../utilities/getSuccessAndErrorPayload');

const uploadFileController = async (req,resp,next)=>{

    console.log(req.body.productId);
    console.log(req.files);
    const arrayOfPics = []



    try{
        req.files.forEach(async (eachFile)=>{


           
    
        })

        for(eachFile of req.files){

            try{
                const upload = await uploadOnCloudinary(eachFile.path);
                const prodPic= {productID:req.body.productID, productColor:req.body.productHexCode,productImageURL:upload.url}
                console.log("entry to db",prodPic)
                const createdProductPic =  await ProductsPictures.create(prodPic);
                console.log("product PIC",createdProductPic)
                arrayOfPics.push(createdProductPic);
                console.log(arrayOfPics);
            }

            catch(err){

                console.log(err.message);
                const errorPayload = getErrorPayload();
                errorPayload.message= err.message;
                resp.send(errorPayload)
   
            }
        }

        console.log("hello")

        const successPayload = getSuccessPayload();
        successPayload.responsePayload = arrayOfPics;

        resp.send(successPayload)

    }

    catch(err){
        console.log(err.message);
        const errorPayload = getErrorPayload();
        errorPayload.message= err.message;
        resp.send(errorPayload)
    }
    
    
 
}


module.exports={uploadFileController}