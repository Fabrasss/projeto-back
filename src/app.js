const express = require('express')
const routerUser = require('./routes/usuariosRoutes.js')
const app = express()
const sequelize = require('./config/database.js')
const sync = require('./config/sync.js')
const bodyParser = require('body-parser');
const RouterCategory = require('./routes/categoriaRoutes.js')
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use('/v1/user', routerUser)       
app.use('/v1/category',RouterCategory)

app.listen(10000, () => {
    console.log('http://localhost:10000')
})