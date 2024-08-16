const app = require('./app-express.js')

const { Category } = require('../models/Models.js');

app.get('/', (req, res) => {
    res.send('Olá, mundo')
})

app.get('/v1/category/search', async (req, res) => {
    console.log(req.query);

    const page = Number(req.query.page || !-1);
    const limit = Number(req.query.limit || 10);
    const fields = req.query.fields

    console.log('fields', fields)

    const total = await Category.count()
    const produtos = await Category.findAll({attributes:fields.split(','), limit: (limit), offset: (limit) * (page - 1) })
    res.send({
        data: produtos,
        "total": total,
        "limit": limit,
        "page": page,
    })
})

app.get('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.params.id', request.params.id)

    Category.findOne({ where: { id: request.params.id } })
        .then((result) => res.send(result))
})


app.get('/v1/category/', (request, res) => {
    console.log('request.url', request.url) // debug


    Category.findAll()
        .then((result) => res.send(result))
})

app.post('/v1/category', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)

    Category.create(request.body).then((result) => res.status(201).send(result))
})


app.put('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    console.log('request.body', request.body)
    Category.update(request.body, { where: { id: request.params.id } }).then((result) => res.send(result))
})

app.delete('/v1/category/:id', (request, res) => {
    console.log('request.url', request.url) // debug
    Category.destroy({ where: { id: request.params.id } }).then((result) => {
        res.send('deletei com sucesso essa quantidade de linhas: ' + result)
    })
})
