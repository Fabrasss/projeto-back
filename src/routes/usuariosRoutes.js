const express = require('express')
const userController = require('../controllers/usuariosController')
const router = express.Router();

router.get('/cadastrar', userController.createUser)
router.get('/listar/:id', userController.listUserId)
router.get('/listar', userController.listUser)
router.get('/atualizar', userController.updateUser)
router.get('/deletar', userController.deleteUser)

module.exports = router