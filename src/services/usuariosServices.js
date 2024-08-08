const model = require('../models/usuarios')

const createUser = async (data) => {
    try {
        model.create(data)
    } catch (error) {
        console.log('usuarios não cadastrado: ' + error)
    }
}

const listUser = async () => {
    try {
        await model.sync()
        const userList = await model.findAll()
        return userList
    } catch (error) {
        console.log('erro ao listar usuarios: ' + error)
    }
}

const listUserId = async (id) => {
    try {
        await model.sync()
        const userList = await model.findByPk(parseInt(id))
        return userList
    } catch (error) {
        console.log('erro ao listar usuario: ' + error)
    }
}


const updateUser = async (data) => {
    try {
        const id = data.id
        const listaOBJ = Object.entries(data)
        const listaFiltrada = listaOBJ.filter(([chave, valor]) => valor !== '')
        const updateUser = Object.fromEntries(listaFiltrada)
        console.log(listaFiltrada)
        await model.update(updateUser, {
            where: { id: id }
        })

    } catch (error) {
        console.log('Erro ao atualizar usuario: ' + error)
    }
}

const deleteUser = async (data) => {
    try {
        const checkk = await model.destroy({
            where: { id: data }
        })
        if (checkk > 0) {
            console.log('Usuario deletado')
        } else {
            console.log('Usuario não encontrado')
        }
    } catch {
        console.log('Erro ao tentar deletar usuario')
    }
}



module.exports = {
    createUser,
    listUser,
    updateUser,
    deleteUser,
    listUserId
}