const { Sequelize } = require('sequelize');

require('dotenv').config();
// const Products = require('./models/products');

// Option 3: Passing parameters separately (other dialects)
const dbConnection = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
	host: process.env.DBHOST,
	dialect: 'postgres',
});

dbConnection
	.authenticate()
	.then(() => {
		console.log('successfully connected to database');
	})
	.catch((err) => {
		console.log('error', err);
	});

module.exports = dbConnection;
