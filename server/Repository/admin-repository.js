const Config = require('../database/models/config');
const ProductsPictures = require('../database/models/productPics');
const Products = require('../database/models/products');

const { Op, Sequelize } = require('sequelize');
const { deleteImageByUrl } = require('../external/cloudinary');

const createProductRepo = async (reqBody) => {
	try {
		console.log(reqBody);
		const product = await Products.create(reqBody);
		return product;
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

const deleteProductRepo = async ({ productID, secretKey }) => {
	try {
		const findScretKey = await Config.findOne({ where: { attribute1: secretKey }, raw: true });
		console.log(findScretKey);
		if (findScretKey?.attribute1 !== secretKey) {
			throw { errorMessage: 'error caught in repo level', message: 'secret key invalid' };
		}

		const productPictures = await ProductsPictures.findAll({ where: { productID } });
		productPictures.forEach(async (eachImage) => {
			await deleteImageByUrl(eachImage.productImageURL);
		});

		const product = await Products.destroy({ where: { productID } });
		return product;
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

const getAllProducts = async () => {
	try {
		return await Products.findAll({
			attributes: ['productID', 'productName', 'price', 'features', 'imageURL', 'colorOptions', 'visible', 'category'],
			include: { model: ProductsPictures, as: 'productPictureDetails', attributes: ['productImageURL', 'id', 'productColor'], order: [['id', 'ASC']] },
		});
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

const updatedProductRepo = async (reqBody) => {
	try {
		console.log(reqBody);
		const product = await Products.update(reqBody, { where: { productID: reqBody.productID }, returning: true });
		// await Products.save();
		return product[1];
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

const deleteImageRepo = async (imageUrl) => {
	try {
		const image = await ProductsPictures.destroy({ where: { productImageURL: imageUrl } });
		// await Products.save();
		return image[1];
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

const deleteColorRepo = async (productID, colorHexCode) => {
	try {
		const findAllImages = await ProductsPictures.findAll({ where: { productID, productColor: colorHexCode } });
		findAllImages.forEach(async (eachImage) => {
			await deleteImageByUrl(eachImage.productImageURL);
			await deleteImageRepo(eachImage.productImageURL);
		});
		// await Products.save();
		return { message: {} };
	} catch (error) {
		console.log('in repo', error.message);
		throw { errorMessage: 'error caught in repo level', message: error.message };
	}
};

module.exports = { createProductRepo, deleteColorRepo, deleteProductRepo, updatedProductRepo, getAllProducts, deleteImageRepo };
