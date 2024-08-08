const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgresql://postgres.nrgysfupywxfpswtyoac:queroumdb123@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')
const Usuarios = require('../models/usuarios');
const Categorias = require('../models/categorias');
const Produtos = require('../models/produtos');
(async () => {
    try {
        await Usuarios.sync(); 
        await Categorias.sync(); 
        await Produtos.sync(); 
        console.log('Tabelas sincronizadas com sucesso.');
    } catch (error) {
        console.error('Erro ao sincronizar as tabelas:', error);
    }
})();

module.exports