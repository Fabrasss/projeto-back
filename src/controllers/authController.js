const jwt = require('jsonwebtoken')
require('dotenv').config()
const Usuario = require('../models/usuarios')

const login = (req, res) => {
    const dados = req.body
    Usuario.findOne({ where: { email: dados.email, password: dados.password } })
        .then(result => {
            if (result) {
                const token = jwt.sign(dados, process.env.JWT, { expiresIn: '1h' })
                res.send(token)
            } else {
                alert('Deu ruim no login')
            }
        })


}

module.exports = { login }