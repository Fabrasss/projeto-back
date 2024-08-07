const express = require('express')
const routerUser = require('./routes/usuariosRoutes.js')
const app = express()
const sequelize = require('./config/database.js')
const sync = require('./config/sync.js')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/v1/user', routerUser)       
app.listen(10000, () => {
    console.log('http://localhost:10000/')
})