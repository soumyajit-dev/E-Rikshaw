

const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');


const Users = db.define('Users', {
 
    userID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {

        type: Sequelize.STRING,
        allowNull: false,

    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }

   
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Users === db.models.Users); // true




module.exports = Users;