const service = require('../services/categoriaService')

const list =  async (req,res)=>{
    let list = await service.list()
    res.send(list)
}

const listId = async (req,res) => {
    const list = await service.listId(req)
    res.send(list)
}

const create = async (req,res) => {
    await service.create(req.body)
    res.send(await service.list())
}

const deletar = async (req,res) => {
    await service.deletar(req.param.id)
    res.send(await service.list())
}



module.exports = {
    list,
    listId,
    create
}