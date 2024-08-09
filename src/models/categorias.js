const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(`postgresql://postgres.nrgysfupywxfpswtyoac:${process.env.senha_db}@aws-0-sa-east-1.pooler.supabase.com:6543/postgres`)
const Categorias = sequelize.define('categorias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
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
        defaultValue: false
    }
}, {
    timestamps: true 
});

module.exports = Categorias