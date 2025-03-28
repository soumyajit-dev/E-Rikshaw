const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');
const ProductsPictures = require('./productPics');


const Query = db.define('Query', {
 
    queryID: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey:true,
        
    },
    queryMessage: {

        type: DataTypes.STRING,
        allowNull: false,

    },

    queryPhone: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    queryEmail: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    forProduct:{
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    // Other model options go here
});

module.exports=Query;