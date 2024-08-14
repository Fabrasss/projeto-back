const app = require('./app-express.js')

const { Product } = require('../models/Models.js');

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})

app.get('/v1/product/search', async (req, res) => {
    console.log(req.query);

    const page = Number(req.query.page || 1);
    const limit = Number(req.query.limit || 30);
    const fields = req.query.fields

    console.log('fields', fields)

    const total = await Product.count()
    const produtos = await Product.findAll({attributes:fields.split(','), limit: (limit), offset: (limit) * (page - 1) })
    res.send({
        data: produtos,
        "total": total,
        "limit": limit,
        "page": page,
    })
})

app.get('/v1/product/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    Product.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})


app.get('/v1/product/', (request, res) => {
    console.log('request.url', request.url) // debug


    Product.findAll()
        .then((result) => res.send(result))
})

app.post('/v1/product', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    Product.create(request.body).then((result) => res.status(201).send(result))
})


app.put('/v1/product/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    Product.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/product/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    Product.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: ' + result)
    })
})
