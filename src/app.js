require('dotenv').config()
require('./routes/userRoutes')
require('./routes/productRoutes')
require('./routes/categoryRoutes')

const app = require('./routes/app-express')
const PORT = 10000

app.listen(PORT, ()=> { console.log('Está rodando')})