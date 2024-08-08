const model = require('../models/categorias')

const list = async () => {
   const list = await model.findAll()
   return list
}

const create = async (req) => {
    await model.create(req)
}

module.exports = {
    list,
    create
}