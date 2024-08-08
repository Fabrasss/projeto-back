const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres.nrgysfupywxfpswtyoac:queroumdb123@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')
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