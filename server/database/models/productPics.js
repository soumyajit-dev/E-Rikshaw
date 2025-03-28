

const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');


const ProductsPictures = db.define('ProductsPictures', {
 
    productID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false,
    },
    productColor: {
        type: Sequelize.STRING,
        allowNull: true
    },
    productImageURL: {

        type: Sequelize.STRING,
        allowNull: false,

    }
});

// `sequelize.define` also returns the model
console.log(ProductsPictures === db.models.ProductsPictures); 
module.exports = ProductsPictures;