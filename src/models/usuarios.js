const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()
const senha_postgre = process.env.senha_postgre
const sequelize = new Sequelize('postgresql://postgres.nrgysfupywxfpswtyoac:queroumdb123@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',{
    host:'dpg-cqp1g90gph6c73ff38eg-a.oregon-postgres.render.com',
    dialect:'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

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

Usuarios.sync()

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

Categorias.sync()

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
Produtos.sync()


sequelize.authenticate().then(function(){
    console.log('conexão com banco estabelecida')
}).catch(function(erro){
    console.log('falha ao conectar: '+erro)
})

module.exports = Usuarios