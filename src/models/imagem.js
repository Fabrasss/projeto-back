const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')
const Produtos = require('./produtos.js')

const imagens = sequelize.define('imagens', {
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
          },
    },
    enabled: {
        type: DataTypes.STRING,
        allowNull: false
    },
    path: {
        type: DataTypes.STRING,
        allowNull: true
    },
   
}, {
    timestamps: true 
});

Produtos.hasMany(imagens, { foreignKey: 'product_id' });
imagens.belongsTo(Produtos);

module.exports = imagens