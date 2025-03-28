const { getAllDetailsFromProductsTable, getAllDetailsFromTestimonials, getConfigProperties } = require("../Repository/homeRepository");
const ProductsPictures = require("../database/models/productPics");
const Products = require("../database/models/products");
const Query = require("../database/models/query");


const homeService = async (request,response)=>{
    const responseBody={}

  
    try{
        responseBody.products = await getAllDetailsFromProductsTable();
        responseBody.testimonials = await getAllDetailsFromTestimonials();

        
        
    
      
    }
    catch(error){
      
        console.log(error)
        throw ({errorMessage:"error caught in service level", message:error.message});

        
    }

    return responseBody;

}

const configService = async (request)=>{
    const responseBody={}

  
    try{
        let homeBannerImages={};
        homeBannerImages = await getConfigProperties(request);
        return homeBannerImages;
    }
    catch(error){
      
        throw ({errorMessage:"error caught in service level", message:error.message});
    }



}





module.exports={
    homeService,configService
}