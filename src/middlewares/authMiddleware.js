const express = require(express)
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authentication = (req,res,next)=>{
    const cabecalho = req.headers['authorization']
    const token = cabecalho && cabecalho.split('')[1]

    if(token === null){
        return res.sendStatus(401)
    }

    jwt.verify(token,process.env.JWT, )
}