const service = require('../services/categoriaService')

const list =  async (req,res)=>{
    let list = await service.list()
    res.send(list)
}

const create = async (req,res) => {
    await service.create(req.body)
    res.send(await service.list())
}

module.exports = {
    list,
    create
}