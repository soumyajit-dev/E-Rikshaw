
const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');


const Config = db.define('configProperties', {
 
    pageName: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    sectionName:{
        type: Sequelize.STRING,
        allowNull: false,
    },

    attribute1:{

        type: Sequelize.STRING,
        allowNull: true,

    },

    attribute2:{

        type: Sequelize.STRING,
        allowNull: true,


        
    },

    attribute3:{

        type: Sequelize.STRING,
        allowNull: true,
        
    }
   
});

// `sequelize.define` also returns the model
console.log(Config === db.models.Config); 
module.exports = Config;