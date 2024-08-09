const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(`postgresql://postgres.nrgysfupywxfpswtyoac:${process.env.senha_db}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`)

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });


module.exports = sequelize