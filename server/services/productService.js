const Config = require("../database/models/config");
const { deleteImageByUrl } = require("../external/cloudinary");
const { createProductRepo, updatedProductRepo, getAllProducts, deleteProductRepo, deleteImageRepo, deleteColorRepo } = require("../Repository/admin-repository");
const { getProductDetails, getImagesByHextCodeAndProductCode, updateProductVisibilityInDb } = require("../Repository/homeRepository");

const productService = async (request, response) => {
  const responseBody = {};
  try {
    const productID = request.productID;
    if (!productID || productID.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productID required for search" });
    }
    responseBody.productDetails = await getProductDetails(productID);
    responseBody.productDetails.productPictureDetails = responseBody.productDetails.productPictureDetails.sort(function(a, b) { return a.id - b.id });
  } catch (error) {
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
  return responseBody;
};


const deleteProductService = async ({productID, secretKey}) => {
  const responseBody = {};
  try {
   
    const resp = await deleteProductRepo({productID,secretKey});
    return resp;


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};
const createProductService = async ({productID,productName}) => {
  const responseBody = {};
  try {

    const newProd={productID,productName,visible:'N'};
    const resp = await createProductRepo(newProd);
    return resp;


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};

const updateProductService = async (requestBody) => {
  const responseBody = {};
  try {

    const updatedProduct = await updatedProductRepo(requestBody);
    // const newUpdatedProd = await getProductDetails(requestBody.productID)
    
    return updatedProduct;


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};

const deleteColorService = async ({productID,colorHexCode}) => {
  const responseBody = {};

  try {

    const updatedProduct = deleteColorRepo(productID,colorHexCode);
    
    return updatedProduct;


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};

const deleteImageService = async (requestBody) => {
  const responseBody = {};
  const imageUrl=requestBody.imageUrl;
  try {

    await deleteImageByUrl(imageUrl);
    await deleteImageRepo(imageUrl);
    
    return {message:{imageUrl}};


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};

const getAllProductsService = async () => {
  const responseBody = {};
  try {

    const updatedProduct = getAllProducts();
    
    return updatedProduct;


  } catch (error) {
    console.log('prod service',error.message)
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
};

const getImageByColorService = async (request, response) => {
  const responseBody = {};
  try {
    const productID = request.productID;
    const productColorHex = request.productColorHex;

    responseBody.productID = productID;
    responseBody.productColorHex = productColorHex;

    if (!productID || productID.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productID required for search" });
    }

    if (!productColorHex || productColorHex.length === 0) {
      throw ({ errorMessage: "error caught in service level", message: "productColorHex required for search" });
    }

    const allPics = await getImagesByHextCodeAndProductCode(request);

    responseBody.pictures = allPics.map((eachPic) => {
      return eachPic.productImageURL;
    });
  } catch (error) {
    throw ({ errorMessage: "error caught in service level", message: error.message });
  }
  return responseBody;
};

// New method to update product visibility
const updateVisibility = async (productID, visible) => {
  try {
    if (!productID || !visible) {
      throw new Error('Product ID and visibility status are required');
    }
    // Call the repository function to update visibility
    const result = await updateProductVisibilityInDb(productID, visible);
    return result;
  } catch (error) {
    throw new Error('Error updating product visibility: ' + error.message);
  }
};

module.exports = {
  productService,
  getImageByColorService,
  updateVisibility,
  getAllProducts,
  deleteColorService,
  deleteImageService,
  createProductService,
  deleteProductService,
  updateProductService,
  getAllProductsService
};
