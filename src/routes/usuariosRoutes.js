const express = require('express')
const userController = require('../controllers/usuariosController')
const router = express.Router();

router.post('/cadastrar', userController.createUser)
router.get('/listar/:id', userController.listUserId)
router.get('/listar', userController.listUser)
router.put('/atualizar', userController.updateUser)
router.delete('/deletar/:id', userController.deleteUser)

module.exports = router