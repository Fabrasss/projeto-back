const service = require('../services/usuariosServices')
const model = require('../models/usuarios')
const createUser = async (req, res) => {
    service.createUser(req.body)
    res.send(console.log('usuario cadastrado com sucesso'))
}

const listUser = async (req, res) => {
    const list = await service.listUser()
    res.send(list)
}


const listUserId = async (req, res) => {
    const list = await service.listUserId(req.params.id)
    res.send(list)
}

const updateUser = async (req, res) => {
    await service.updateUser(req.query)
    res.send(await service.listUser())
    console.log(req.query)
}
const deleteUser = async (req, res) => {
    await service.deleteUser(req.params.id)
    res.send(await service.listUser())
}

module.exports = {
    createUser,
    listUserId,
    listUser,
    updateUser,
    deleteUser
}