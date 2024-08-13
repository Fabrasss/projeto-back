const express = require('express')
const userController = require('../controllers/usuariosController')
const authController = require('../controllers/authController')
const router = express.Router();

router.post('', userController.createUser)
router.get('/listar/:id', userController.listUserId)
router.get('/listar', userController.listUser)
router.put('/atualizar', userController.updateUser)
router.delete('/deletar/:id', userController.deleteUser)
router.post('/token', authController.login)

module.exports = router