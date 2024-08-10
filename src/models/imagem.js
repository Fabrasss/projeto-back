const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')
const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        defaultValue: false
    }
}, {
    timestamps: true 
});

module.exports = Categorias