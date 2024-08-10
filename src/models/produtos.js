const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js')
const Produtos = sequelize.define('produtos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false 
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
    use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false, 
    },
    price_with_descount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
     timestamps:true
})

module.exports = Produtos