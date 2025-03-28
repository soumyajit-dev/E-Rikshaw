

const db = require('../database');

const { Sequelize, DataTypes } = require('sequelize');


const Testimonial = db.define('Testimonial', {
 
    testimonialID: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    testimonial: {

        type: Sequelize.STRING,
        allowNull: false,

    },

    testimonialAuthor: {

        type: DataTypes.STRING,
        allowNull: false,

    },
    stars: {

        type: Sequelize.STRING,
        allowNull: false,

    },
    imageURL: {

        type: Sequelize.STRING,

    }
}, {
    // Other model options go here
});

// `sequelize.define` also returns the model
console.log(Testimonial === db.models.Testimonial); // true




module.exports = Testimonial;