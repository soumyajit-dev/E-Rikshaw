const db = require('../database');
const { Sequelize, DataTypes } = require('sequelize');
const ProductsPictures = require('./productPics');
// const Query = require('./query'); // Uncomment if needed

const Products = db.define('Products', {
    productID: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    colorOptions: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    motor: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    controller: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tyreDiameter: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    tyreType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    weightWithoutBattery: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    breakType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    roof: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shocker: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    seatingCapacity: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bodyDimension: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    charger: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    battery: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rim: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    mileage: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sideCover: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    wiper: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    converter: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    headLight: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    features: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    curtain: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sideLookingGlass: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    camera: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sensorLock: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    rearShocker: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fireExtinguisher: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    footMat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fmSet: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    taxiLight: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fan: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    toolKit: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    jackHandleSet: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    passengerHandle: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stepnyCover: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    fogLight: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    visible: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Y',
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    // Other model options go here
});

// Check if the model is correctly defined
console.log(Products === db.models.Products); // true

// Define associations
Products.hasMany(ProductsPictures, { foreignKey: 'productID', as: 'productPictureDetails' , onDelete:'CASCADE'});
ProductsPictures.belongsTo(Products, { foreignKey: 'productID', as: 'productInfo' });

// Uncomment and use the following lines if you have the Query model and association
// Products.hasMany(Query, { foreignKey: 'productID', as: 'queries' });
// Query.belongsTo(Products, { foreignKey: 'forProduct', as: 'forProduct' });

module.exports = Products;
