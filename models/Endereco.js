const Sequelize = require('sequelize');
const db = require('../db/connection');


const endereco = db.define('endereco', {
    NomePontoDeColeta: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    EnderecoPontoDeColeta: {
        type: Sequelize.STRING, 
        allowNull: false,
    },

    Email: {
        type: Sequelize.STRING,  
        allowNull: false,  
    },

    TipoDeColeta: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    ImagemDoPonto: {
        type: Sequelize.BLOB,    
        allowNull: true, 
    },
});

module.exports = endereco;