const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dc','root','1234',{
    host:'localhost',
    dialect:'mysql'
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