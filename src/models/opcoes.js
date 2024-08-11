const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Produtos = require('./produtos.js');

const opcoes = sequelize.define('opcoes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Produtos,
            key: 'id'
          }
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shape: {
        type: DataTypes.ENUM,
        values: ['square', 'circle'],
        allowNull: true,
        defaultValue: 'square'
    },
    radius: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    type: {
        type: DataTypes.ENUM,
        values: ['text', 'color'],
        allowNull: true,
        defaultValue: 'text'
    },
    values: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true 
});

Produtos.hasMany(opcoes, { foreignKey: 'product_id' });
opcoes.belongsTo(Produtos);

module.exports = opcoes