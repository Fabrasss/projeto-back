const express = require('express')
var cors = require('cors')
// DESESTRUTURACAO
const { Sequelize, DataTypes, QueryTypes } = require('sequelize');
const app = express()
const port = 3000   

const sequelize = new Sequelize('postgresql://postgres.fqvrpotctjxyrrryjnlg:adorocookiess!@aws-0-sa-east-1.pooler.supabase.com:6543/postgres')

app.get('/', (req, res) => {
    res.send('requisição GET à homepage')
  })