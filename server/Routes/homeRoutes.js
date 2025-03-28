const express = require('express');
const { homeController, configController } = require('../controllers/homeController');
const {
	productController,
	searchImageByColor,
	updateProductVisibility,
	createProduct,
	updateProduct,
	getAllProductsForAdminController,
	deleteProduct,
	deleteImage,
	deleteColor,
} = require('../controllers/productController');
const { setQuery, getQuery, getEmails, submitEmail } = require('../controllers/queryController');
const { authController } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddlesware');
const { modelController } = require('../controllers/modelController');
const ProductsPictures = require('../database/models/productPics');
const schedule = require('node-schedule');
const Query = require('../database/models/query');
const { uploadFileController } = require('../controllers/uploadFileController');
const { upload } = require('../middlewares/multer-fileupload');

const homeRouter = express.Router();

// Get Services
homeRouter.get('/getHomeDetails', homeController);
homeRouter.get('/startAndCreateModels', modelController);
homeRouter.get('/getEmailsForNewsletter', authMiddleware, getEmails);
homeRouter.get('/getAllProductsForAdmin', getAllProductsForAdminController);
homeRouter.get('/allProductsPictures', async (req, resp) => {
	const allPictures = await ProductsPictures.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
	resp.send(allPictures);
});

// Post Services
homeRouter.post('/getConfig', configController);
homeRouter.post('/getQuery', authMiddleware, getQuery);
homeRouter.post('/getProductDetails', productController);
homeRouter.post('/products', updateProductVisibility);
homeRouter.post('/createQuery', setQuery);
homeRouter.post('/authenticate', authController);
homeRouter.post('/submitEmails', submitEmail);
homeRouter.post('/getImageByColor', searchImageByColor);
homeRouter.post('/uploadFiles', upload.array('photos', 12), uploadFileController);
homeRouter.post('/deleteImage', deleteImage);
homeRouter.post('/deleteColor', deleteColor);
homeRouter.post('/createProduct', createProduct);
homeRouter.post('/deleteProduct', deleteProduct);

// Update Services
homeRouter.patch('/updateProduct', updateProduct);

//Schedulers
schedule.scheduleJob('deleteEveryMonth', '0 0 0 1,15 ? *', async function () {
	return await Query.truncate();
});

module.exports = homeRouter;
