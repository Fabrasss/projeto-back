const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgresql://postgres.nrgysfupywxfpswtyoac:${process.env.senha_db}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`)
const Usuarios = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true 
});

module.exports = Usuarios