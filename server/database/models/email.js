
const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');


const Emails = db.define('Emails', {
 
    emailID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
   
});

// `sequelize.define` also returns the model
console.log(Emails === db.models.Emails); 
module.exports = Emails;