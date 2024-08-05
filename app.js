const express = require('express')
const routerUser = require('./src/routes/usuariosRoutes.js')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/user', routerUser)       
        
        
app.listen(3000, () => {
    console.log('http://localhost:3000')
})