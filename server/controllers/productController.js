const {
	productService,
	getImageByColorService,
	updateVisibility,
	createProductService,
	updateProductService,
	getAllProducts,
	deleteProductService,
	deleteImageService,
	deleteColorService,
} = require('../services/productService');
const { getSuccessPayload, getErrorPayload } = require('../utilities/getSuccessAndErrorPayload');

const productController = async (request, response, next) => {
	try {
		const getAllDetails = await productService(request.body);
		const successPayload = getSuccessPayload();

		successPayload.responsePayload = getAllDetails;

		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const searchImageByColor = async (request, response, next) => {
	try {
		const getAllDetails = await getImageByColorService(request.body);
		const successPayload = getSuccessPayload();

		successPayload.responsePayload = getAllDetails;

		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

// Function to update product visibility
const updateProductVisibility = async (request, response, next) => {
	try {
		const { productID, visible } = request.body;

		if (!productID || !visible) {
			const errorPayload = getErrorPayload();
			errorPayload.message = 'ID and visibility are required';
			return response.status(400).send(errorPayload);
		}

		// Call service to update the product
		const updateResult = await updateVisibility(productID, visible); // Assuming this method exists in productService

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = updateResult;
		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const createProduct = async (request, response, next) => {
	try {
		const prodDetails = request.body;
		const createdProduct = await createProductService(prodDetails);

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = createdProduct;
		response.send(successPayload);
	} catch (error) {
		console.log('prod controller', error.message);
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const deleteProduct = async (request, response, next) => {
	try {
		const prodDetails = request.body;
		const createdProduct = await deleteProductService(prodDetails);

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = createdProduct;
		response.send(successPayload);
	} catch (error) {
		console.log('prod controller', error.message);
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const getAllProductsForAdminController = async (request, response, next) => {
	try {
		const prodDetails = request.body;
		const allProducts = await getAllProducts();

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = allProducts;
		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const deleteColor = async (request, response, next) => {
	try {
		const colorDetails = request.body;
		const success = await deleteColorService(colorDetails);

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = success;
		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const deleteImage = async (request, response, next) => {
	try {
		const imageDetails = request.body;
		const deleteProduct = await deleteImageService(imageDetails);

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = deleteProduct;
		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

const updateProduct = async (request, response, next) => {
	try {
		const prodDetails = request.body;
		const updatedProduct = await updateProductService(prodDetails);

		const successPayload = getSuccessPayload();
		successPayload.responsePayload = updatedProduct;
		response.send(successPayload);
	} catch (error) {
		const errorPayload = getErrorPayload();
		errorPayload.message = error.errorMessage;
		errorPayload.extendedMessage = error.message;
		response.send(errorPayload);
	}
};

module.exports = {
	productController,
	createProduct,
	searchImageByColor,
	deleteImage,
	deleteColor,
	updateProductVisibility,
	getAllProductsForAdminController,
	deleteProduct,
	updateProduct,
};
