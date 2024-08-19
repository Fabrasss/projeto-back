const { uri } = require('../config/database.js');

const { Sequelize, DataTypes, QueryTypes } = require("sequelize")

const sequelize = new Sequelize(uri)

const User = sequelize.define(
    'User', {
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

const Category = sequelize.define(
    'Category', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
    },
    {
        timestamps: true
    },
)

const Product = sequelize.define(
    'Product', {
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
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
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        price_with_discount: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }
)


  const ProductOption = sequelize.define(
    "ProductOption",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products", // Nome da tabela de produtos
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shape: {
        type: DataTypes.ENUM("square", "circle"),
        defaultValue: "square",
      },
      radius: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.ENUM("text", "color"),
        defaultValue: "text",
      }
    },
    {
      timestamps: true,
    }
  );



  const ProductImage = sequelize.define(
    "ProductImage",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        references: {
          model: "Products",
          key: "id",
        },
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false, 
      },
    },
    {
      timestamps: true,
    }
  );
  

  const OptionProduct = sequelize



  Product.hasMany(ProductImage, { foreignKey: "product_id" });
  ProductImage.belongsTo(Product, { foreignKey: "product_id" });
  
  Product.hasMany(ProductOption, { foreignKey: "product_id" });
  ProductOption.belongsTo(Product, { foreignKey: "product_id" });
  
  Category.belongsToMany(Product, {
    through: "ProductCategory",
    foreignKey: "category_id",
  });
  Product.belongsToMany(Category, {
    through: "ProductCategory",
    foreignKey: "product_id",
  });
sequelize.sync();

module.exports = {
    User,
    Category,
    Product,
    ProductOption,
    ProductImage
}