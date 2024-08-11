const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Produtos = require('./produtos');
const Categorias = require('./categorias');

const ProdutoCategoria = sequelize.define('ProdutoCategoria', {
  ProductId: {
    type: DataTypes.INTEGER,
    references: {
      model: Produtos,
      key: 'id'
    },
    primaryKey: true
  },
  CategoriaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Categorias,
      key: 'id'
    },
    primaryKey: true
  },
}, {
  timestamps: true
});

Produtos.belongsToMany(Categorias, { through: ProdutoCategoria, foreignKey: 'ProductId', otherKey: 'CategoriaId', as: 'categorias' });
Categorias.belongsToMany(Produtos, { through: ProdutoCategoria, foreignKey: 'CategoriaId', otherKey: 'ProductId', as: 'produtos' });

module.exports = ProdutoCategoria;
