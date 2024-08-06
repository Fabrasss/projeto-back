const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('root_h78r','root_h78r_user','vm77RQXROddJlkmxxXO5C2CsdXX0g64Y',{
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

sequelize.authenticate().then(function(){
    console.log('conexão com banco estabelecida')
}).catch(function(erro){
    console.log('falha ao conectar: '+erro)
})

module.exports = Usuarios